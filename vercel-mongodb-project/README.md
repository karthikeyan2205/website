# Vercel MongoDB Project

This project demonstrates how to connect to MongoDB using the Vercel platform. It includes a simple setup for managing environment variables and connecting to a MongoDB database.

## Project Structure

```
vercel-mongodb-project
├── src
│   └── index.ts        # Entry point for the application
├── .env                # Environment variables
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your_username/vercel-mongodb-project.git
   cd vercel-mongodb-project
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root of the project and add your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/?retryWrites=true&w=majority
   ```

4. **Run the application:**
   You can run the application locally using:
   ```bash
   npm start
   ```

5. **Deploy to Vercel:**
   Install the Vercel CLI if you haven't already:
   ```bash
   npm install -g vercel
   ```
   Then deploy your project:
   ```bash
   vercel
   ```

## Usage

Once the application is running, it will connect to the MongoDB database using the connection string provided in the `.env` file. You can modify the `src/index.ts` file to implement your application logic.

## License

This project is licensed under the MIT License.