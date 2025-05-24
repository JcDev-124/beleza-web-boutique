
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, ShoppingCart } from 'lucide-react';

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

const products: Product[] = [
  {
    id: 1,
    name: "Sérum Facial Vitamina C",
    description: "Sérum antioxidante que ilumina e rejuvenesce a pele",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Cuidados Faciais"
  },
  {
    id: 2,
    name: "Creme Hidratante Noturno",
    description: "Hidratação profunda durante o sono para pele radiante",
    price: 125.90,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Cuidados Faciais"
  },
  {
    id: 3,
    name: "Óleo Corporal Relaxante",
    description: "Óleo natural com lavanda para relaxamento e hidratação",
    price: 67.90,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Corpo"
  },
  {
    id: 4,
    name: "Máscara Facial Purificante",
    description: "Remove impurezas e deixa a pele limpa e suave",
    price: 45.90,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Cuidados Faciais"
  },
  {
    id: 5,
    name: "Protetor Solar Natural",
    description: "Proteção solar FPS 60 com ingredientes naturais",
    price: 78.90,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Proteção"
  },
  {
    id: 6,
    name: "Kit Limpeza Facial",
    description: "Kit completo para limpeza profunda da pele",
    price: 156.90,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Kits"
  }
];

const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  
  const categories = ['Todos', 'Cuidados Faciais', 'Corpo', 'Proteção', 'Kits'];
  
  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-beauty-dark mb-4">Nossos Produtos</h2>
          <p className="text-xl text-beauty-medium max-w-2xl mx-auto">
            Descubra nossa linha completa de produtos de beleza premium
          </p>
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
      </div>
    </section>
  );
};

export default ProductsSection;
