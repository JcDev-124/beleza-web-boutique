import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductsSection from '@/components/ProductsSection';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartItemsCount={0} onCartClick={() => {}} />
      <div className="pt-20">
        <ProductsSection onAddToCart={() => {}} />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
