import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { Row, Col, Nav, Form, Navbar } from 'react-bootstrap';
import { Facebook, Instagram } from 'lucide-react';
import espressoImg from '../assets/images/coffee/espresso.png';
import doubleespressoImg from '../assets/images/coffee/double espresso.png';
import latteImg from '../assets/images/coffee/latte.png';
import cappuccinoImg from '../assets/images/coffee/cappuccino.png';
import MacchiatoImg from '../assets/images/coffee/Macchiato.png';
import FlatwhiteImg from '../assets/images/coffee/Flat White.png';
import AmericanoImg from '../assets/images/coffee/Americano.png';
import HotchocolateImg from '../assets/images/non-coffee/hot chocolate.png';
import MatchalatteImg from '../assets/images/non-coffee/matcha latte.png';
import ChaitealatteImg from '../assets/images/non-coffee/chai tea latte.png';
import FreshlemonadeImg from '../assets/images/non-coffee/fresh lemonade.png';
import IcedteaImg from '../assets/images/non-coffee/iced tea.png';
import FruitsmoothiesImg from '../assets/images/non-coffee/fruit smoothies.png';
import CroissantImg from '../assets/images/pastries/croissant.png';
import ChocolatechipmuffinImg from '../assets/images/pastries/chocolate chip muffin.png';
import CinnamonrollImg from '../assets/images/pastries/cinnamon roll.png';
import BlueberrysconeImg from '../assets/images/pastries/blueberry scone.png';
import CheesedanishImg from '../assets/images/pastries/cheese danish.png';
import ChickenCaesarSandwichImg from '../assets/images/sandwiches/Chicken Caesar Sandwich.png';
import TurkeyandAvocadoSandwichImg from '../assets/images/sandwiches/Turkey and Avocado Sandwich.png';
import HamandCheeseCroissantImg from '../assets/images/sandwiches/Ham and Cheese Croissant.png';
import VeggieDelightSandwichImg from '../assets/images/sandwiches/Veggie Delight Sandwich.png';
import TunaMeltImg from '../assets/images/sandwiches/Tuna Melt.png';
import './CoffeeMenu.css';
import StyledCart from './StyledCart';

const CoffeeMenu = () => {
  const [activeCategory, setActiveCategory] = useState('COFFEE');
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const detailViewRef = useRef(null);

  useEffect(() => {
    if (selectedItem && detailViewRef.current) {
      detailViewRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [selectedItem]);

  const menuItems = {
    COFFEE: [
      {
        name: 'Espresso',
        description: 'Bold, rich, and concentrated coffee with a golden crema.',
        price: 80,
        image: espressoImg
      },
      {
        name: 'Double Espresso',
        description: 'Twice the strength, rich and bold, with a creamy crema.',
        price: 100,
        image: doubleespressoImg
      },
      {
        name: 'Latte',
        description: 'Smooth espresso blended with steamed milk, topped with a light layer of foam.',
        price: 120,
        image: latteImg
      },
      {
        name: 'Cappuccino',
        description: 'A balanced blend of espresso, steamed milk, and a thick layer of frothy foam.',
        price: 130,
        image: cappuccinoImg
      },
      {
        name: 'Macchiato',
        description: 'Espresso "stained" with a touch of steamed milk, offering a strong coffee flavor with a creamy finish.',
        price: 100,
        image: MacchiatoImg
      },
      {
        name: 'Flat White',
        description: 'A velvety combination of espresso and steamed milk, with a thin layer of microfoam.',
        price: 120,
        image: FlatwhiteImg
      },
      {
        name: 'Americano',
        description: 'A smooth espresso diluted with hot water for a rich yet mellow flavor.',
        price: 90,
        image: AmericanoImg
      }
    ],
    'NON-COFFEE': [
      {
        name: 'Hot Chocolate',
        description: 'Creamy, rich chocolate topped with whipped cream.',
        price: 100,
        image: HotchocolateImg
      },
      {
        name: 'Matcha Latte',
        description: 'Smooth blend of earthy matcha and steamed milk.',
        price: 120,
        image: MatchalatteImg
      },
      {
        name: 'Chai Tea Latte',
        description: 'Spiced black tea mixed with milk and a touch of sweetness.',
        price: 110,
        image: ChaitealatteImg
      },
      {
        name: 'Fresh Lemonade',
        description: 'Refreshing blend of fresh lemons and a hint of sweetness.',
        price: 90,
        image: FreshlemonadeImg
      },
      {
        name: 'Iced Tea (House Blend)',
        description: 'Cool and refreshing tea with a citrus twist.',
        price: 80,
        image: IcedteaImg
      },
      {
        name: 'Fruit Smoothies',
        description: 'Blended fresh fruits for a naturally sweet and healthy treat.',
        price: 140,
        image: FruitsmoothiesImg
      }
    ],
    PASTRIES: [
      {
        name: 'Croissant',
        description: 'Flaky, buttery pastry perfect for a light snack.',
        price: 60,
        image: CroissantImg
      },
      {
        name: 'Chocolate Chip Muffin',
        description: 'Soft, moist muffin filled with sweet chocolate chips.',
        price: 70,
        image: ChocolatechipmuffinImg
      },
      {
        name: 'Cinnamon Roll',
        description: 'Sweet dough rolled with cinnamon and topped with icing.',
        price: 80,
        image: CinnamonrollImg
      },
      {
        name: 'Blueberry Scone',
        description: 'A crumbly, buttery scone with bursts of blueberry flavor.',
        price: 75,
        image: BlueberrysconeImg
      },
      {
        name: 'Cheese Danish',
        description: 'Flaky pastry filled with smooth cream cheese filling.',
        price: 85,
        image: CheesedanishImg
      }
    ],
    SANDWICHES: [
      {
        name: 'Chicken Caesar Sandwich',
        description: 'Grilled chicken, romaine lettuce, Caesar dressing, and parmesan on toasted bread.',
        price: 150,
        image: ChickenCaesarSandwichImg
      },
      {
        name: 'Turkey and Avocado Sandwich',
        description: 'Sliced turkey, creamy avocado, lettuce, and tomato on whole wheat bread.',
        price: 160,
        image: TurkeyandAvocadoSandwichImg
      },
      {
        name: 'Ham and Cheese Croissant',
        description: 'Warm, flaky croissant filled with savory ham and melted cheese.',
        price: 140,
        image: HamandCheeseCroissantImg
      },
      {
        name: 'Veggie Delight Sandwich',
        description: 'Fresh cucumber, tomato, lettuce, and hummus on multigrain bread.',
        price: 130,
        image: VeggieDelightSandwichImg
      },
      {
        name: 'Tuna Melt',
        description: 'Creamy tuna salad with melted cheese on toasted bread.',
        price: 150,
        image: TunaMeltImg
      }
    ]
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const addToCart = (item, quantity) => {
    setCart(prevCart => {
      const newQuantity = parseInt(quantity);
      const existingItem = prevCart.find(i => i.id === item.name);
      
      if (existingItem) {
        return prevCart.map(cartItem => 
          cartItem.id === item.name 
            ? { ...cartItem, quantity: cartItem.quantity + newQuantity } 
            : cartItem
        );
      }
      
      return [...prevCart, {
        ...item,
        id: item.name,
        quantity: newQuantity
      }];
    });
    
    alert(`Added ${quantity} ${item.name} to cart`);
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const DetailView = ({ item, onClose }) => {
    const [quantity, setQuantity] = useState(1);
  
    return (
      <div className="detail-view" ref={detailViewRef}>
        <div className="detail-content">
          <div className="detail-image-container">
            <img src={item.image} alt={item.name} className="detail-image" />
          </div>
          
          <div className="detail-info">
            <h2 className="detail-name">{item.name}</h2>
            <p className="detail-price">Php {item.price}</p>
            
            <div className="detail-actions">
              <select 
                className="detail-quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button 
                className="detail-add-button"
                onClick={() => {
                  addToCart(item, quantity);
                  onClose();
                }}
              >
                Add to cart
              </button>
            </div>
            
            <p className="detail-description">{item.description}</p>
          </div>
          
          <button onClick={onClose} className="detail-close-button">
            <X size={24} />
          </button>
        </div>
      </div>
    );
  };

  const CartView = () => (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="cart-close-button" onClick={() => setShowCart(false)}>
          <X size={24} />
        </button>
        
        <h2 className="cart-title">Your Cart</h2>
        
        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Php {item.price}</p>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>Php {getTotalPrice()}</span>
              </div>
              <button className="checkout-button">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  const getAllItems = () => {
    return Object.values(menuItems).flat();
  };

  const getFilteredItems = () => {
    let items;
    if (!searchTerm) {
      items = menuItems[activeCategory];
    } else {
      const searchTermLower = searchTerm.toLowerCase();
      const allItems = getAllItems();
      items = allItems.filter(item =>
        item.name.toLowerCase().includes(searchTermLower) ||
        item.description.toLowerCase().includes(searchTermLower)
      );
    }
    
    return items.filter(item => !selectedItem || item.name !== selectedItem.name);
  };

  const getCategoryForItem = (itemName) => {
    for (const [category, items] of Object.entries(menuItems)) {
      if (items.some(item => item.name === itemName)) {
        return category;
      }
    }
    return '';
  };

  const filteredItems = getFilteredItems();

  const MenuItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    
    return (
      <div className="menu-item" onClick={() => handleItemClick(item)}>
        <div>
          <h3 className="item-name">{item.name}</h3>
          {searchTerm && (
            <p className="item-category">
              {getCategoryForItem(item.name)}
            </p>
          )}
          <p className="item-description">{item.description}</p>
          <p className="item-price">Php {item.price}</p>
          
          <div className="item-image-container">
            <div className="item-image-wrapper">
              <img src={item.image} alt={item.name} className="item-image" />
            </div>
          </div>
        </div>

        <div className="item-actions" onClick={(e) => e.stopPropagation()}>
          <select 
            className="quantity-select"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button 
            className="add-to-cart-button"
            onClick={() => addToCart(item, quantity)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-right">
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={24} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={24} />
              </a>
            </div>
            <div className="text-content">
              <div className="contact-info">(02) 86236</div>
              <div className="address">Governor's GMA Carmona, Governor's Dr</div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div className="menu-container">
      <nav className="navbar">
        <div className="navbar-content">
          <span className="brand-logo">MICROLOT</span>
          <div className="navbar-actions">
            {showSearch ? (
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <button 
                  onClick={() => {
                    setShowSearch(false);
                    setSearchTerm('');
                  }}
                  className="search-close-button"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowSearch(true)}
                className="search-button"
              >
                <Search size={20} />
              </button>
            )}
            <button 
              className="cart-button"
              onClick={() => setShowCart(true)}
            >
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="cart-badge">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {showCart && (
  <StyledCart 
    onClose={() => setShowCart(false)}
    cartItems={cart}
    removeFromCart={removeFromCart}
    updateQuantity={updateQuantity}
  />
)}

      <nav className="category-nav">
        {['COFFEE', 'NON-COFFEE', 'PASTRIES', 'SANDWICHES'].map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setSearchTerm('');
            }}
            className={`category-link ${activeCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </nav>

      <section className="menu-section">
        <h1 className="section-title">
          {searchTerm ? 'Search Results' : activeCategory}
        </h1>
        
        <div className="selected-item-container">
          {selectedItem && (
            <DetailView 
              item={selectedItem} 
              onClose={() => setSelectedItem(null)} 
            />
          )}
        </div>
        
        <div className="menu-grid">
          {getFilteredItems().map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoffeeMenu;