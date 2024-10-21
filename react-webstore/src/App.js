// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import CartPage from './Pages/CartPage';
import RingsPage from './Pages/RingsPage';
import BraceletsPage from './Pages/BraceletsPage';
import ChainsPage from './Pages/ChainsPage';
import LandingPage from './Pages/LandingPage';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null); // State to store the logged-in username

  return (
    <Provider store={store}>
      <Router>
        {/* Pass the logged-in user and setter to Header */}
        <Header loggedInUser={loggedInUser} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Pass setLoggedInUser to Register so user can log in */}
          <Route path="/Register" element={<Register setLoggedInUser={setLoggedInUser} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/rings" element={<RingsPage />} />
          <Route path="/bracelets" element={<BraceletsPage />} />
          <Route path="/chains" element={<ChainsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
