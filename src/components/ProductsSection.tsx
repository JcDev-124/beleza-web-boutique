
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search } from 'lucide-react';
import { useSiteData } from '@/contexts/SiteDataContext';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const { siteData } = useSiteData();
  const { products, productsSectionTitle, productsSectionSubtitle } = siteData;
  
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const categories = ['Todos', 'Cuidados Faciais', 'Corpo', 'Proteção', 'Kits'];
  
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-beauty-dark mb-4">{productsSectionTitle}</h2>
          <p className="text-xl text-beauty-medium max-w-2xl mx-auto">
            {productsSectionSubtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-beauty-medium w-4 h-4" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-beauty-medium focus:border-beauty-dark"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? 'bg-beauty-medium hover:bg-beauty-dark text-white'
                  : 'border-beauty-medium text-beauty-medium hover:bg-beauty-light'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 border-beauty-light hover:border-beauty-medium overflow-hidden flex flex-col h-full"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-beauty-medium text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="flex-grow">
                <CardTitle className="text-beauty-dark group-hover:text-beauty-medium transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-beauty-medium">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-beauty-dark">
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>
              </CardContent>
              
              <CardFooter className="mt-auto pt-0">
                <Button 
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-beauty-medium hover:bg-beauty-dark text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No products found message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-beauty-medium text-lg">
              Nenhum produto encontrado com os filtros aplicados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
