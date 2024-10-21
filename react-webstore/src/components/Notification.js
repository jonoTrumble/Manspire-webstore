import React, { useEffect } from 'react';
import '../App.css'; // 

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Automatically close the notification after 1 second
    }, 1000); // Set timeout to 1 second

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onClose]);

  return (
    <div className="notification">
      {message}
    </div>
  );
};

export default Notification;
