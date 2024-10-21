import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, } from 'react-bootstrap';
import { addToCart } from '../cartSlice'; // Import the addToCart action
import CHN1 from '../Images/Chains/Cuban(Gold)5mm.png';
import CHN2 from '../Images/Chains/Cuban(Silver)3mm.png';
import CHN3 from '../Images/Chains/FigaroChain(Silver)3mm.png';
import CHN4 from '../Images/Chains/RopeChain(Gold)3mm.png';
import CHN5 from '../Images/Chains/RopeChain(Silver)3mm.png';
import CHN6 from '../Images/Chains/ConnellChain(Gold)3mm.png';

const chains = [
  {
    productName: "Cuban (Gold) 5mm",
    productCode: "CHN-001",
    price: 150.00,
    description: "A stunning 5mm gold Cuban chain that combines timeless elegance with durability, perfect for any occasion.",
    image: CHN1
  },
  {
    productName: "Cuban (Silver) 3mm",
    productCode: "CHN-002",
    price: 95.00,
    description: "A sleek and durable 3mm silver Cuban chain with a polished finish, ideal for wearing alone or with your favorite pendants.",
    image: CHN2
  },
  {
    productName: "Figaro Chain (Silver) 3mm",
    productCode: "CHN-003",
    price: 120.00,
    description: "A stylish 3mm silver Figaro chain featuring alternating long and short links, adding a sophisticated touch to any jewelry collection.",
    image: CHN3
  },
  {
    productName: "Rope Chain (Gold) 3mm",
    productCode: "CHN-004",
    price: 85.00,
    description: "A beautifully crafted 3mm gold rope chain that provides a classic yet modern look, perfect for layering or wearing alone.",
    image: CHN4
  },
  {
    productName: "Rope Chain (Silver) 3mm",
    productCode: "CHN-005",
    price: 70.00,
    description: "An elegant 3mm silver rope chain, perfect for everyday wear and versatile enough for any outfit.",
    image: CHN5
  },
  {
    productName: "Connell Chain (Gold) 3mm",
    productCode: "CHN-006",
    price: 200.00,
    description: "A luxurious 3mm gold Connell chain featuring intricate detailing, perfect for those who appreciate vintage style and craftsmanship.",
    image: CHN6
  }
];

const ChainsPage = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const [showNotification, setShowNotification] = useState(false); // State to control notification

  const handleAddToCart = (chain) => {
    dispatch(addToCart(chain)); // Dispatch the action
    setShowNotification(true); // Show notification
    setTimeout(() => {
      setShowNotification(false); // Hide notification after 3 seconds
    }, 3000);
  };

  return (
    <div>
      {/* Notification Popup */}
      <div className={`cart-notification ${!showNotification ? 'hide' : ''}`}>
        Item added to cart!
      </div>

      {/* Render the chains */}
      <div className="d-flex flex-wrap justify-content-around">
        {chains.map((chain, index) => (
          <Card key={index} style={{ width: '20rem' }} className="mb-4">
            <Card.Img variant="top" src={chain.image} alt={chain.productName} />
            <Card.Body>
              <Card.Title>{chain.productName}</Card.Title>
              <Card.Text className='cardDescription'>{chain.description}</Card.Text>
              <Card.Text><strong>Price: </strong>${chain.price.toFixed(2)}</Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: '#09271d', borderColor: '#09271d' }}
                onClick={() => handleAddToCart(chain)} // Trigger add to cart and notification
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

export default ChainsPage;
