# Munshi Wholesale E-commerce Website

Welcome to Munshi Wholesale! This repository contains the front end code for our e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). Firebase handles user authentication.

## Table of Contents

- [Munshi Wholesale E-commerce Website](#munshi-wholesale-e-commerce-website)
  - [Table of Contents](#table-of-contents)
  - [User Features](#user-features)
    - [Product Browsing:](#product-browsing)
    - [User Dashboard:](#user-dashboard)
  - [Admin Features](#admin-features)
    - [Dashboard Home Page:](#dashboard-home-page)
    - [Product Management:](#product-management)
    - [Inventory Management:](#inventory-management)
    - [Review Management:](#review-management)
    - [Order Management:](#order-management)
    - [User Management:](#user-management)
  - [Technology Stack](#technology-stack)
  - [How to Install and Setup the Project](#how-to-install-and-setup-the-project)
  - [Copyright Information](#copyright-information)

## User Features

### Product Browsing:

- View a list of products on the homepage.
- Filter products by brand, price, and rating on the category and all products page.
- View product details (brand, name, price, description) on the product details page.
- Review a product (requires purchase).
- Shopping cart and checkout process for user purchases.

### User Dashboard:

- See recently purchased items (5) and recent undelivered orders (3-5) on the homepage.
- View profile information and update it on the profile page.
- Update the delivery address on the profile page.
- See all orders and reviews with edit/delete options for reviews.
- Initiate product returns or warranty claims.

## Admin Features

### Dashboard Home Page:

- View graphs for orders (month, week, day), sales comparison charts (past month, week, and current day), and user registration graph (last 30 days).

### Product Management:

- Add new products.
- View a list of existing products.
- Edit and delete product information.

### Inventory Management:

- View inventory status for all products.
- Sort items by quantity.
- Low quantity alert (below 5).

### Review Management:

- View all user reviews with deletion capability.

### Order Management:

- View current orders requiring shipment.
- Filter orders by status.

### User Management:

- Ban/unban users.
- View user profiles in a modal window.
- See all orders and reviews for a specific user with a tab system ("User Order/Review History").

## Technology Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase

## How to Install and Setup the Project

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Configure Firebase for user authentication.
5. Set up a MongoDB database.
6. Start the development server by running `npm start`.

## Copyright Information

© 2024 Astra Solution. All Rights Reserved.

This project is developed by Astra Solution. Unauthorized use for commercial purposes is strictly prohibited. Please contact Astra Solution to obtain a license for commercial use.
