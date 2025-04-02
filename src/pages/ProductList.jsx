import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/App.css";

const ProductList = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Get category from URL query parameter
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  useEffect(() => {
    fetchProducts();
  }, [category]); // Re-fetch when category changes

  const fetchProducts = async () => {
    setError(null);
    setLoading(true);

    try {
      let url = "https://dummyjson.com/products";
      
      // If category is specified, fetch products from that category
      if (category) {
        url = `https://dummyjson.com/products/category/${category}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const productData = await response.json();
      // Handle both response formats (direct array or products array)
      setProducts(productData.products || productData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  function transformSentence(sentence) {
    if (!sentence || typeof sentence !== 'string') return '';
    
    const words = sentence.split(' ');
    let result = [];
    
    for (let i = 0; i < words.length; i++) {
      if ((i + 1) % 2 !== 0) {
        const reversedWord = words[i].split('').reverse().join('');
        result.push(reversedWord);
      }
    }
    
    return result.join(' ');
  }

  // Example usage (you can remove this if not needed)
  const input = "Hello world this is a test sentence";
  const output = transformSentence(input);
  console.log(output); 

  return (
    <div className="product-list-container">
         <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back to Products
      </button>
      <h1 className="page-title">
        {category ? `${category.replace(/-/g, ' ')} Products` : 'Our Products'}
      </h1>
      
      {error && (
        <div className="error-message">
          <p>Error Occurred: {error}</p>
          <button className="retry-button" onClick={fetchProducts}>
            Retry
          </button>
        </div>
      )}

      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      )}

      {!loading && products.length === 0 && (
        <div className="no-products">
          <p>No products found{category ? ` in ${category.replace(/-/g, ' ')} category` : ''}</p>
          {category && (
            <button 
              className="view-all-button"
              onClick={() => navigate('/products-list')}
            >
              View All Products
            </button>
          )}
        </div>
      )}

      {products.length > 0 && (
        <div className="products-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="product-image-container">
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="product-thumbnail"
                />
                {product.discountPercentage > 0 && (
                  <span className="product-discount">
                    -{product.discountPercentage}%
                  </span>
                )}
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-brand">{product.brand}</p>
                <div className="price-container">
                  <span className="current-price">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.discountPercentage > 0 && (
                    <span className="original-price">
                      ${(product.price / (1 - product.discountPercentage/100)).toFixed(2)}
                    </span>
                  )}
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
                <button className="view-details-button">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;