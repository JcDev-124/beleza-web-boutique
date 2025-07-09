
import { X, Trash2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from './ProductsSection';

interface CartItem extends Product {
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const CartModal = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartModalProps) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Create WhatsApp message
    let message = "Olá! Gostaria de finalizar meu pedido:\n\n";
    
    cartItems.forEach((item) => {
      message += `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\nTotal: R$ ${total.toFixed(2)}\n\nObrigado!`;
    
    const whatsappUrl = `https://wa.me/5516988099466?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-beauty-light">
          <h2 className="text-2xl font-bold text-beauty-dark">Carrinho de Compras</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-beauty-medium text-lg">Seu carrinho está vazio</p>
              <Button 
                onClick={onClose}
                className="mt-4 bg-beauty-medium hover:bg-beauty-dark text-white"
              >
                Continuar Comprando
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border border-beauty-light rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-beauty-dark">{item.name}</h3>
                    <p className="text-beauty-medium text-sm">R$ {item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 rounded-full border border-beauty-medium text-beauty-medium hover:bg-beauty-light flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="font-medium text-beauty-dark">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-beauty-medium text-beauty-medium hover:bg-beauty-light flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-beauty-dark">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 mt-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-beauty-light p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-beauty-dark">Total:</span>
              <span className="text-2xl font-bold text-beauty-dark">
                R$ {total.toFixed(2)}
              </span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Finalizar pelo WhatsApp
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
