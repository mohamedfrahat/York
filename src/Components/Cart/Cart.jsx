import React, { useState } from 'react';
import './Cart.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product Name 1",
      image: "https://via.placeholder.com/150",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product Name 2",
      image: "https://via.placeholder.com/150",
      price: 200,
      quantity: 2,
    }
  ]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? 
        { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart-container">
      <h2> Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <div className="quantity-control">
                  <button className="quantity-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <div className="cart-item-total">
                <p>Total: ${item.price * item.quantity}</p>
                <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Subtotal: ${calculateSubtotal()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
