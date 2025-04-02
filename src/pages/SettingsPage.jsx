import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, setTheme } from '../features/theme/themeSlice';
import '../styles/SettingsPage.css';

const SettingsPage = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <div className={`settings-page ${theme}`}>
      <h1>Settings</h1>
      
      <div className="settings-card">
        <h2>Appearance</h2>
        
        <div className="theme-options">
          <div 
            className={`theme-option ${theme === 'light' ? 'active' : ''}`}
            onClick={() => dispatch(setTheme('light'))}
          >
            <div className="theme-preview light">
              <div className="preview-header"></div>
              <div className="preview-content"></div>
            </div>
            <span>Light Mode</span>
          </div>
          
          <div 
            className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => dispatch(setTheme('dark'))}
          >
            <div className="theme-preview dark">
              <div className="preview-header"></div>
              <div className="preview-content"></div>
            </div>
            <span>Dark Mode</span>
          </div>
        </div>
        
        <button 
          className="toggle-theme-btn"
          onClick={() => dispatch(toggleTheme())}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;