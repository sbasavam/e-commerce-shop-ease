import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import "../styles/App.css";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    getProductDetail();
  }, [id]);

  const getProductDetail = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const productData = await response.json();
      setProduct(productData);
      setSelectedImage(productData.thumbnail);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (loading) return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading product details...</p>
    </div>
  );
  
  if (error) return (
    <div className="error-message">
      <p>Error: {error}</p>
      <button className="retry-button" onClick={getProductDetail}>
        Retry
      </button>
    </div>
  );
  
  if (!product) return null;

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back to Products
      </button>
      
      {showSuccess && (
        <div className="success-message">
          {product.title} added to cart successfully!
        </div>
      )}
      
      <div className="product-main">
        <div className="product-gallery">
          <div className="main-image">
            <img src={selectedImage} alt={product.title} />
          </div>
          <div className="image-thumbnails">
            {product.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${product.title} ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                className={selectedImage === image ? "active" : ""}
              />
            ))}
          </div>
        </div>
        
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <div className="product-meta">
            <span className="product-brand">{product.brand}</span>
            <span className="product-category">{product.category}</span>
          </div>
          
          <div className="product-rating">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`star ${i < Math.round(product.rating) ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
            <span>({product.rating})</span>
          </div>
          
          <div className="price-container">
            <span className="current-price">
              ${product.price.toFixed(2)}
            </span>
            <span className="original-price">
              ${(product.price / (1 - product.discountPercentage/100)).toFixed(2)}
            </span>
            <span className="discount-badge">
              Save {product.discountPercentage}%
            </span>
          </div>
          
          <p className="product-description">{product.description}</p>
          
          <div className="stock-info">
            {product.stock > 0 ? (
              <span className="in-stock">In Stock ({product.stock} available)</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>
          
          <div className="action-buttons">
            <button 
              onClick={handleAddToCart}
              className="add-to-cart"
              disabled={product.stock <= 0}
            >
              Add to Cart
            </button>
            <button 
              className="buy-now"
              disabled={product.stock <= 0}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      
      <div className="product-section">
        <h3>Additional Images</h3>
        <div className="additional-images">
          {product.images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`${product.title} ${index + 1}`}
              className="additional-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;