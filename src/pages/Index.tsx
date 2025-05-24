
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection, { Product } from '@/components/ProductsSection';
import InstagramSection from '@/components/InstagramSection';
import AboutSection from '@/components/AboutSection';
import CartModal from '@/components/CartModal';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast({
          title: "Produto atualizado!",
          description: `${product.name} quantidade aumentada no carrinho.`,
        });
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast({
          title: "Produto adicionado!",
          description: `${product.name} foi adicionado ao carrinho.`,
        });
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast({
      title: "Produto removido",
      description: "Item removido do carrinho.",
    });
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Navbar 
        cartItemsCount={cartItemsCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main>
        <HeroSection />
        <ProductsSection onAddToCart={addToCart} />
        <InstagramSection />
        <AboutSection />
      </main>

      <Footer />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
};

export default Index;
