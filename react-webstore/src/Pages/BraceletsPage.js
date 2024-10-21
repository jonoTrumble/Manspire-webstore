import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { Card, Button } from 'react-bootstrap';
import { addToCart } from '../cartSlice'; // Import the addToCart action
import BRCL1 from '../Images/Bracelets/SantinoSteelbracelet-Gold.png';
import BRCL2 from '../Images/Bracelets/SantinoSteelbracelet-Silver.png';
import BRCL3 from '../Images/Bracelets/BlackLavastoneBracelet.png';
import BRCL4 from '../Images/Bracelets/NaturalBlackAgateandLavaStoneMensBracelet.png';
import BRCL5 from '../Images/Bracelets/RopeBracelet(Silver)5mm.png';
import BRCL6 from '../Images/Bracelets/RopeBracelet(Gold)5mm.png';

const bracelets = [
  {
    productName: "Santino | Steel bracelet – Gold",
    productCode: "BRCL-001",
    price: 45.00,
    description: "A fashionable gold steel bracelet that combines elegance with durability, perfect for both casual and formal occasions.",
    image: BRCL1
  },
  {
    productName: "Santino | Steel bracelet – Silver",
    productCode: "BRCL-002",
    price: 55.00,
    description: "A sleek silver steel bracelet designed to elevate any outfit, featuring a modern and minimalist aesthetic.",
    image: BRCL2
  },
  {
    productName: "Black Lava Stone Bracelet",
    productCode: "BRCL-003",
    price: 75.00,
    description: "A unique black lava stone bracelet that offers a bold look while promoting grounding and strength.",
    image: BRCL3
  },
  {
    productName: "Natural Black Agate and Lava Stone Mens Bracelet",
    productCode: "BRCL-004",
    price: 30.00,
    description: "An eye-catching mens bracelet made with natural black agate and lava stones, perfect for everyday wear or gifting.",
    image: BRCL4
  },
  {
    productName: "Rope Bracelet (Silver) 5mm",
    productCode: "BRCL-005",
    price: 120.00,
    description: "An elegant silver rope bracelet, featuring a 5mm thickness that adds a touch of sophistication to any ensemble.",
    image: BRCL5
  },
  {
    productName: "Rope Bracelet (Gold) 5mm",
    productCode: "BRCL-006",
    price: 40.00,
    description: "A stylish gold rope bracelet with a 5mm width, perfect for layering or wearing solo for a chic look.",
    image: BRCL6
  }
];

const BraceletsPage = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const [showNotification, setShowNotification] = useState(false); // State to control notification

  const handleAddToCart = (bracelet) => {
    dispatch(addToCart(bracelet)); // Dispatch the action
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

      {/* Render the bracelets */}
      <div className="d-flex flex-wrap justify-content-around">
        {bracelets.map((bracelet, index) => (
          <Card key={index} style={{ width: '20rem' }} className="mb-4">
            <Card.Img variant="top" src={bracelet.image} alt={bracelet.productName} />
            <Card.Body>
              <Card.Title>{bracelet.productName}</Card.Title>
              <Card.Text className='cardDescription'>{bracelet.description}</Card.Text>
              <Card.Text><strong>Price: </strong>${bracelet.price.toFixed(2)}</Card.Text>
              <Button
                variant="primary"
                style={{ backgroundColor: '#09271d', borderColor: '#09271d' }}
                onClick={() => handleAddToCart(bracelet)} // Trigger add to cart and notification
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

export default BraceletsPage;
