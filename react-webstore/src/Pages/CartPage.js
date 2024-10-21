import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../cartSlice'; // Adjust this path as needed
import '../App.css'; // Assuming this is where your CSS is located

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalCost } = useSelector((state) => state.cart);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [shippingCost, setShippingCost] = useState(5.00); // Default to standard shipping
  const [showHelp, setShowHelp] = useState(false); // Help popup visibility

  useEffect(() => {
    // Adjust shipping cost based on selected shipping method
    if (shippingMethod === 'standard') {
      setShippingCost(5.00);
    } else if (shippingMethod === 'express') {
      setShippingCost(15.00);
    } else if (shippingMethod === 'overnight') {
      setShippingCost(25.00);
    }
  }, [shippingMethod]);

  // Handle item removal by its unique id (or index if needed)
  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); // Ensure you're passing the correct identifier
  };

  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };

  // Calculate the total cost with shipping included
  const totalWithShipping = (totalCost + shippingCost).toFixed(2);

  return (
    <div className="cart-container">
      <h1 className="cart-header">Your Cart</h1>
      {items.length === 0 ? (
        <p className="cart-empty-message">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-item-list">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                {item.productName} <span>${item.price.toFixed(2)}</span>
                <button 
                  className="remove-button" 
                  onClick={() => handleRemove(item.id)} // Use unique ID for removal
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3 className="cart-total">Subtotal: ${totalCost.toFixed(2)}</h3>
          
          <div className="shipping-method">
            <h4>Select Shipping Method:</h4>
            <select value={shippingMethod} onChange={handleShippingChange}>
              <option value="standard">Standard Shipping - $5.00</option>
              <option value="express">Express Shipping - $15.00</option>
              <option value="overnight">Overnight Shipping - $25.00</option>
            </select>
          </div>

          <h3 className="cart-total-with-shipping">Total (incl. Shipping): ${totalWithShipping}</h3>
          
          <button className="help-button" onClick={() => setShowHelp(true)}>
            Need Help?
          </button>
        </div>
      )}

      {showHelp && (
        <div className="help-popup">
          <div className="help-content">
            <h4>Shipping Options:</h4>
            <p><strong>Standard Shipping:</strong> Delivery within 5-7 business days.</p>
            <p><strong>Express Shipping:</strong> Delivery within 2-3 business days.</p>
            <p><strong>Overnight Shipping:</strong> Next-day delivery for orders placed before 2 PM.</p>
            <button className="close-help" onClick={() => setShowHelp(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
