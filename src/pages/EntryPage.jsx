import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/EntryPage.css";

const EntryPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Verify data structure and transform if needed
        if (Array.isArray(data)) {
          // Handle both formats: array of strings or array of objects
          const formattedCategories = data.map(item => {
            if (typeof item === 'string') {
              return {
                slug: item,
                name: item.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
              };
            }
            return item; // Already in object format
          });
          setCategories(formattedCategories);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const navigateToAllProducts = () => {
    navigate("/products-list");
  };

  const navigateToCategory = (categorySlug) => {
    navigate(`/products-list?category=${categorySlug}`);
  };

  return (
    <div className="entry-page">
      <h1 className="entry-title">Welcome to ShopEase</h1>
      
      <div className="categories-section">
        <h2 className="categories-title">Select Category</h2>
        
        {error ? (
          <p className="error-message">{error}</p>
        ) : loading ? (
          <div className="categories-loading">
            {[...Array(5)].map((_, i) => (
              <div key={`loading-${i}`} className="categories-loading-item"></div>
            ))}
          </div>
        ) : (
          <div className="categories-list">
            {categories.map((category) => (
              <button
                key={category.slug}  // Using slug as unique key
                className="category-button"
                onClick={() => navigateToCategory(category.slug)}
              >
                {category.name || category.slug.replace(/-/g, ' ')}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <button 
        className="explore-button"
        onClick={navigateToAllProducts}
      >
        Explore All Products
      </button>
    </div>
  );
};

export default EntryPage;