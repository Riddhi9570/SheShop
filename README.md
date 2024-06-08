# SheShop

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Steps](#steps)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

Sheshop is an e-commerce platform that offers users the ability to browse products, add them to their cart, and make purchases. It also includes an admin interface for managing products, orders, and users, all powered by Strapi CMS.

## Features

- User authentication and authorization
- Product listing and search functionality
- Shopping cart and checkout process
- Order management system
- Admin panel for product, order, and user management

## Technologies

- Backend: Strapi CMS
- Frontend: React.js, SCSS
- Payment Gateway: Stripe API

## Steps

1. **Fork thr repository:**
   
   ![image](https://github.com/Riddhi9570/SheShop/assets/72887868/14344507-0b36-4bf1-b39d-014198d7849e)
   
3. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/sheshop.git
   cd sheshop
   
5. **Install backend/api dependencies:**

    ```bash
   cd api
   npm install
    
7. **Install frontend dependencies:**

   ```bash
   cd client
   npm install
   
9. **Set up environment variables:**
   Create a '.env' file in the 'api' directory and add the following:

   ```.env
    HOST = 0.0.0.0
    PORT = 1337
    APP_KEYS = your_app_keys_here
    API_TOKEN_SALT = your_api_token_salt_here
    ADMIN_JWT_SECRET = your_admin_jwt_secret_here
    TRANSFER_TOKEN_SALT = your_transfer_token_salt_here
    DATABASE_CLIENT = sqlite
    DATABASE_FILENAME = .tmp/data.db
    JWT_SECRET = your_jwt_secret_here
    STRIPE_KEY = your_stripe_key_here
    CLIENT_URL = http://localhost:3000
   ```
   
  Create a '.env' file in the 'client' directory and add the following:
  
  ```.env
    REACT_APP_APT_TOKEN = your_api_token_here
    REACT_APP_API_URL = http://localhost:1337/api
    REACT_APP_UPLOAD_URL = http://localhost:1337
    REACT_APP_STRIPE_PUBLISHABLE_KEY = your_stripe_publishable_key_here
  ```

6. Run the backend:

   ```bash
   cd backend
   npm run develop
   
8. Run the frontend:

    ```bash
    cd ../frontend
    npm start

The frontend application should now be running on http://localhost:3000, and the backend on http://localhost:1337.

## Usage

### User Interface
- Home Page: Browse products, search for items.
- Product Page: View product details, add to cart.
- Cart: View items in the cart, proceed to checkout.
- Checkout: Enter shipping details, make payment.

### Admin Interface
- Dashboard: Overview of orders, products, and users.
- Products: Add, edit, delete products.
- Orders: Manage and update order status.
- Users: View and manage user accounts.

## Contributing

We welcome contributions to this project! To contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature).
- Open a Pull Request.
