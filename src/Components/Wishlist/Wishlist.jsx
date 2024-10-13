import React, { useState } from 'react';
import './Wishlist.css';

export default function Wishlist() {
  // Wishlist items stored in state
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Wishlist Product 1",
      image: "https://via.placeholder.com/150",
      price: 150,
    },
    {
      id: 2,
      name: "Wishlist Product 2",
      image: "https://via.placeholder.com/150",
      price: 250,
    },
  ]);

  // Remove item from wishlist
  const handleRemoveFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  // Move item to cart and remove from wishlist
  const handleMoveToCart = (id) => {
    const itemToMove = wishlistItems.find(item => item.id === id);
    console.log(`Moving item to cart:`, itemToMove);
    
    // After moving to cart, remove from wishlist
    setWishlistItems(wishlistItems.filter(item => item.id !== id));

    // You can implement logic to actually add the item to the cart here
  };

  return (
    <div className="wishlist-container">
      <h2> Wishlist</h2>

      {wishlistItems.length > 0 ? (
        <div className="wishlist-items">
          {wishlistItems.map(item => (
            <div className="wishlist-item" key={item.id}>
              <img src={item.image} alt={item.name} className="wishlist-item-image" />
              <div className="wishlist-item-details">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
              </div>
              <div className="wishlist-item-actions">
                <button
                  className="move-to-cart-btn"
                  onClick={() => handleMoveToCart(item.id)}
                >
                  Move to Cart
                </button>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty</p>
      )}
    </div>
  );
}
