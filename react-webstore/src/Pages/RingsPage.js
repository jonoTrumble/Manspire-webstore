// pages/RingsPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { addToCart } from '../cartSlice';
import RNG1 from '../Images/Rings/StChristopherRingGold.png';
import RNG2 from '../Images/Rings/StChristopherRing(Silver).png';
import RNG3 from '../Images/Rings/RopeRing(Silver).png';

const rings = [
  {
    productName: 'St. Christopher Ring (Gold)',
    productCode: 'RNG-001',
    price: 120.0,
    description: 'A beautifully crafted gold-plated ring featuring the iconic St. Christopher design, symbolizing protection and guidance.',
    image: RNG1,
  },
  {
    productName: 'St. Christopher Ring (Silver)',
    productCode: 'RNG-002',
    price: 85.0,
    description: 'A stunning sterling silver ring adorned with the image of St. Christopher, representing strength and safety.',
    image: RNG2,
  },
  {
    productName: 'Rope Ring (Silver)',
    productCode: 'RNG-003',
    price: 70.0,
    description: 'A unique silver rope ring with a twist design, offering a modern look while ensuring a comfortable fit for everyday wear.',
    image: RNG3,
  },
];

const RingsPage = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const [showNotification, setShowNotification] = useState(false); // State to control notification

  const handleAddToCart = (ring) => {
    dispatch(addToCart(ring)); // Dispatch the action
    setShowNotification(true); // Show notification
    setTimeout(() => {
      setShowNotification(false); // Hide notification after 3 seconds
    }, 3000);
  };

  return (
    <div className="rings-page-container">
      {/* Notification Popup */}
      <div className={`cart-notification ${!showNotification ? 'hide' : ''}`}>
        Item added to cart!
      </div>

      {/* Render the rings */}
      <div className="d-flex flex-wrap justify-content-around">
        {rings.map((ring, index) => (
          <Card key={index} style={{ width: '20rem' }} className="mb-4">
            <Card.Img variant="top" src={ring.image} alt={ring.productName} />
            <Card.Body>
              <Card.Title>{ring.productName}</Card.Title>
              <Card.Text className='cardDescription'>{ring.description}</Card.Text>
              <Card.Text>
                <strong>Price: </strong>${ring.price.toFixed(2)}
              </Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: '#09271d', borderColor: '#09271d' }}
                onClick={() => handleAddToCart(ring)} // Trigger add to cart and notification
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RingsPage;
