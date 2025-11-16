import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSiteData } from '@/contexts/SiteDataContext';
import { OptimizedImage } from '@/components/ui/optimized-image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
  
  const categories = ['Todos', 'Terapia Capilar', 'Tratamento Capilar', 'Kits', 'Cuidados Faciais'];
  
  // Filtrar produtos por categoria e busca
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

        {/* Single Horizontal Carousel */}
        {filteredProducts.length > 0 ? (
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filteredProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-beauty-light hover:border-beauty-medium overflow-hidden flex flex-col h-full bg-white">
                    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white p-4">
                      <div className="aspect-[3/4] relative">
                        <OptimizedImage
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          skeletonClassName="rounded-lg"
                        />
                      </div>
                      <div className="absolute top-6 right-6">
                        <span className="bg-beauty-medium text-white px-2 py-1 rounded-full text-xs font-semibold shadow-sm">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader className="flex-grow pb-2">
                      <CardTitle className="text-beauty-dark group-hover:text-beauty-medium transition-colors text-lg font-semibold leading-tight text-center">
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pb-4">
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-bold text-beauty-dark">
                          R$ {product.price.toFixed(2)}
                        </span>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="mt-auto pt-0">
                      <Button 
                        onClick={() => onAddToCart(product)}
                        className="w-full bg-beauty-medium hover:bg-beauty-dark text-white transition-all duration-200 font-medium"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Adicionar ao Carrinho
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows */}
            <CarouselPrevious className="hidden md:flex -left-12 bg-beauty-medium hover:bg-beauty-dark text-white border-0" />
            <CarouselNext className="hidden md:flex -right-12 bg-beauty-medium hover:bg-beauty-dark text-white border-0" />
          </Carousel>
        ) : (
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
