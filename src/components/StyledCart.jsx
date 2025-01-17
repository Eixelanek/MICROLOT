import React, { useState } from 'react';
import { ChevronLeft, X } from 'lucide-react';
import './StyledCart.css';

const StyledCart = ({ onClose, cartItems, removeFromCart, updateQuantity }) => {
    const [showDropdown, setShowDropdown] = useState(null);
    const [showEmptyCartError, setShowEmptyCartError] = useState(false);
    
    const calculateTotal = () => {
      return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    const handleQuantitySelect = (itemId, quantity) => {
      updateQuantity(itemId, quantity);
      setShowDropdown(null);
    };

    const handleCheckout = () => {
      if (cartItems.length === 0) {
        setShowEmptyCartError(true);
        setTimeout(() => {
          setShowEmptyCartError(false);
        }, 3000);
        return;
      }

      setTimeout(() => {
        window.location.href = '/confirmation';
      }, 1000);
    };
  
    return (
      <div className="cart-overlay">
        {showEmptyCartError && (
          <div className="checkout-alert" style={{ backgroundColor: '#dc2626' }}>
            Your cart is empty. Please add items before checking out.
          </div>
        )}

        <div className="cart-header">
          <button className="cart-back-button" onClick={onClose}>
            <ChevronLeft size={24} />
          </button>
          <h1 className="cart-title">Your order</h1>
        </div>
  
        <div className="cart-columns">
          <div className="cart-column-header">PRODUCT</div>
          <div className="cart-column-header">PRICE</div>
          <div className="cart-column-header">QUANTITY</div>
          <div className="cart-column-header right">TOTAL</div>
        </div>
  
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty-message">
              Your cart is empty
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-product">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="cart-product-image"
                  />
                  <span className="cart-product-name">{item.name}</span>
                </div>
                <div className="cart-price">Php {item.price}</div>
                <div className="cart-quantity">
                  <div className="cart-quantity-control">
                    <span className="cart-quantity-value">{item.quantity}</span>
                    <button 
                      className="cart-quantity-dropdown"
                      onClick={() => setShowDropdown(showDropdown === item.id ? null : item.id)}
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8">
                        <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="currentColor"/>
                      </svg>
                    </button>
                    {showDropdown === item.id && (
                      <div className="quantity-dropdown-menu">
                        {[1, 2, 3, 4, 5].map(num => (
                          <button
                            key={num}
                            className="quantity-option"
                            onClick={() => handleQuantitySelect(item.id, num)}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="cart-item-total">
                  <span>Php {item.price * item.quantity}</span>
                  <button 
                    className="cart-remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
  
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <span className="cart-total-amount">Php {calculateTotal()}</span>
          </div>
          <button 
            className="cart-checkout-button"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    );
};

export default StyledCart;