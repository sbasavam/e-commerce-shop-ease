import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiLogOut,
  FiSettings,
  FiSun,
  FiMoon,
  FiHome 
} from "react-icons/fi";
import Notification from "../../pages/NotificationPage";
import "./Header.css";
import { toggleTheme } from "../../features/theme/themeSlice";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);
  const dispatch = useDispatch();

  // Get cart items count and current theme from Redux store
  const cartItemsCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  const currentTheme = useSelector((state) => state.theme);

  const user = {
    name: "Sangana Basava M",
    email: "sanganabasavam1999@gmail.com",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    navigate("/");
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <header className={`header ${currentTheme}`}>
      <div className="header-container">
        <span className="logo-text">ShopEase</span>

        <div className="header-icons">
          <div
            className="icon-container"
            onClick={() => navigate("/")} // Retain the functionality to navigate to the home page
          >
            <FiHome className="icon" />
          
          </div>

          <div
            className="icon-container cart-icon"
            onClick={() => navigate("/cart")}
          >
            <FiShoppingCart className="icon" />
            {cartItemsCount > 0 && (
              <span className="icon-badge">{cartItemsCount}</span>
            )}
            <span className="icon-pulse"></span>
          </div>

          {/* Notification Component */}
          <Notification />

          {/* Profile Section */}
          <div className="profile-section" ref={profileRef}>
            <div
              className="profile-trigger"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="profile-avatar">
                <FiUser className="avatar-icon" />
              </div>
              <div className="profile-info">
                <span className="profile-name">{user.name}</span>
                <FiChevronDown
                  className={`dropdown-arrow ${isProfileOpen ? "open" : ""}`}
                />
              </div>
            </div>

            {isProfileOpen && (
              <div className="profile-dropdown">
                <div className="dropdown-content">
                

                  <Link
                    to="/settings"
                    className="dropdown-item"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <FiSettings className="dropdown-icon" />
                    Settings
                  </Link>

                  <div className="theme-toggle-item">
                    <button
                      className="theme-toggle-btn"
                      onClick={handleThemeToggle}
                    >
                      {currentTheme === "light" ? (
                        <>
                          <FiMoon className="dropdown-icon" />
                          Dark Mode
                        </>
                      ) : (
                        <>
                          <FiSun className="dropdown-icon" />
                          Light Mode
                        </>
                      )}
                    </button>
                  </div>

                  <div className="logout-container">
                    <button className="logout-button" onClick={handleLogout}>
                      <FiLogOut className="logout-icon" />
                      <span>Logout</span>
                      <div className="logout-effect"></div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
