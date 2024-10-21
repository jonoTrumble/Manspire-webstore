# Manspire E-Commerce App

This is a React-based e-commerce web application for Manspire, a fictional store specializing in rings, bracelets, and chains. Users can browse products, add items to their cart, register/login, and customize their cart with various shipping options. The app uses Redux for state management and React Router for page navigation.

## Features

- **User Registration & Login**: Users can register with a form that includes validation for fields such as username, email, and password. Once logged in, the username is displayed in the header.
- **Product Categories**: Users can navigate through product categories like rings, bracelets, and chains via the burger menu in the header.
- **Cart Functionality**: Users can add items to their cart, choose a shipping method, and see a dynamic calculation of the total cost with shipping included.
- **Shipping Methods**: The cart allows users to select between Standard, Express, and Overnight shipping options, with corresponding costs.
- **Responsive Design**: The app uses Bootstrap for a responsive, mobile-friendly layout.
- **Notifications**: A popup notification appears when a user adds an item to the cart, showing how many times the user has added items.

## Technologies Used

- **React**: The core framework for building the app.
- **Redux**: For managing the application's state, including cart items and total cost.
- **React Router**: For handling page navigation between components like the Landing Page, Cart Page, Register, and product categories.
- **Bootstrap**: For responsive design and layout styling.
- **Custom CSS**: For unique styling elements specific to Manspire's branding, including the use of the #09271d color scheme.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/manspire-ecommerce-app.git
