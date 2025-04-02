import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";
import Notification from "../../pages/NotificationPage";
import "./Header.css";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);
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

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <span className="logo-text">ShopEase</span>
          <span className="logo-highlight"></span>
        </Link>

        <div className="header-icons">
          {/* Cart Icon */}
          <div
            className="icon-container cart-icon"
            onClick={() => navigate("/products-list")}
          >
            <FiShoppingCart className="icon" />
            <span className="icon-badge">3</span>
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
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <Link to="/settings" className="dropdown-item">
                    Settings
                  </Link>

                  <div className="logout-container">
                    <button className="logout-button">
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
