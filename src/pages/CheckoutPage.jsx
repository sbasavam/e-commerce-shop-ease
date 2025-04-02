import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'credit'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment here (simulated)
    setTimeout(() => {
      dispatch(clearCart());
      navigate('/order-success');
    }, 1000);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <h1>Checkout Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label>Shipping Address</label>
            <textarea 
              name="address" 
              value={formData.address}
              onChange={handleChange}
              required 
              placeholder="Enter your complete shipping address"
            />
          </div>
          
          <div className="form-group">
            <label>Payment Method</label>
            <select 
              name="payment" 
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>
          
          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
      
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order-items">
          {items.map(item => (
            <div key={item.id} className="order-item">
              <span>{item.title} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="order-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;