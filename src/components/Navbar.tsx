
import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Navbar = ({ cartItemsCount, onCartClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    // Se não estamos na página inicial, navegue para lá primeiro
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Aguarde um pouco para a página carregar antes de fazer o scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se já estamos na página inicial, apenas faça o scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-beauty-cream/95 backdrop-blur-md border-b border-beauty-light z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={handleLogoClick}
              className="text-2xl font-bold text-beauty-dark hover:text-beauty-medium transition-colors"
            >
              Granliss
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => handleNavigation('home')}
                className="text-beauty-dark hover:text-beauty-medium px-3 py-2 text-sm font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => handleNavigation('products')}
                className="text-beauty-dark hover:text-beauty-medium px-3 py-2 text-sm font-medium transition-colors"
              >
                Produtos
              </button>
              <button
                onClick={() => handleNavigation('courses')}
                className="text-beauty-dark hover:text-beauty-medium px-3 py-2 text-sm font-medium transition-colors"
              >
                Cursos
              </button>
              <button
                onClick={() => handleNavigation('instagram')}
                className="text-beauty-dark hover:text-beauty-medium px-3 py-2 text-sm font-medium transition-colors"
              >
                Instagram
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="text-beauty-dark hover:text-beauty-medium px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre Nós
              </button>
            </div>
          </div>

          {/* Cart and Mobile menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative border-beauty-medium text-beauty-dark hover:bg-beauty-light"
            >
              <ShoppingBag className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-beauty-medium text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-beauty-dark"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-beauty-cream border-t border-beauty-light">
              <button
                onClick={() => handleNavigation('home')}
                className="text-beauty-dark hover:text-beauty-medium block px-3 py-2 text-base font-medium w-full text-left"
              >
                Início
              </button>
              <button
                onClick={() => handleNavigation('products')}
                className="text-beauty-dark hover:text-beauty-medium block px-3 py-2 text-base font-medium w-full text-left"
              >
                Produtos
              </button>
              <button
                onClick={() => handleNavigation('courses')}
                className="text-beauty-dark hover:text-beauty-medium block px-3 py-2 text-base font-medium w-full text-left"
              >
                Cursos
              </button>
              <button
                onClick={() => handleNavigation('instagram')}
                className="text-beauty-dark hover:text-beauty-medium block px-3 py-2 text-base font-medium w-full text-left"
              >
                Instagram
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="text-beauty-dark hover:text-beauty-medium block px-3 py-2 text-base font-medium w-full text-left"
              >
                Sobre Nós
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
