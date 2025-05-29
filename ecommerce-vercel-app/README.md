# E-commerce Vercel App

## Overview
This project is an e-commerce web application built with TypeScript and Express, designed to manage products and orders. It utilizes MongoDB Atlas for data storage and is deployed on Vercel.

## Features
- Product management: Fetch all products, get product details by ID.
- Order management: Create new orders and fetch order history.
- Environment variable configuration for secure database connections.

## Project Structure
```
ecommerce-vercel-app
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── productsController.ts
│   │   └── ordersController.ts
│   ├── models
│   │   ├── productModel.ts
│   │   └── orderModel.ts
│   ├── routes
│   │   ├── products.ts
│   │   └── orders.ts
│   └── types
│       └── index.ts
├── .env
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- MongoDB Atlas account and cluster set up.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd ecommerce-vercel-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/?retryWrites=true&w=majority
   ```

### Running the Application
To run the application locally, use the following command:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Deployment on Vercel
1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Deploy the application:
   ```
   vercel
   ```

3. Follow the prompts to complete the deployment process.

## Usage
- Access product endpoints to manage products.
- Access order endpoints to manage orders and view order history.

## License
This project is licensed under the MIT License.