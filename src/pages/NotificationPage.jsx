import { useState, useEffect ,useRef} from 'react';
import { FiBell, FiCheck, FiShoppingCart, FiAlertCircle } from 'react-icons/fi';
import '../styles/Notification.css';

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notificationsRef = useRef(null);

  // Dummy notifications data
  const notifications = [
    {
      id: 1,
      title: "New feature available!",
      message: "Check out our newly added dark mode feature",
      time: "2 hours ago",
      read: false,
      icon: <FiCheck className="notification-icon-success" />
    },
    {
      id: 2,
      title: "Order shipped",
      message: "Your order #12345 has been shipped",
      time: "1 day ago",
      read: true,
      icon: <FiShoppingCart className="notification-icon-info" />
    },
    {
      id: 3,
      title: "Security alert",
      message: "New login detected from Chrome on Windows",
      time: "3 days ago",
      read: false,
      icon: <FiAlertCircle className="notification-icon-warning" />
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notification-icon" ref={notificationsRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="notification-trigger">
        <FiBell className="icon" />
        {unreadCount > 0 && <span className="icon-badge">{unreadCount}</span>}
        <span className="notification-dot"></span>
      </div>
      
      {isOpen && (
        <div className="notifications-dropdown">
          <div className="notifications-header">
            <h3>Notifications</h3>
            <button className="mark-all-read">Mark all as read</button>
          </div>
          <div className="notifications-list">
            {notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
              >
                <div className="notification-icon-container">
                  {notification.icon}
                </div>
                <div className="notification-content">
                  <h4>{notification.title}</h4>
                  <p>{notification.message}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
                {!notification.read && <div className="unread-indicator"></div>}
              </div>
            ))}
          </div>
          <div className="notifications-footer">
            <button className="view-all">View all notifications</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;