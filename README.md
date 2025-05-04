# Full-Stack Dashboard with React, Node.js, MongoDB, and JWT Authentication

This project is a full-stack application featuring user authentication using JSON Web Tokens (JWT). The app is divided into two main parts:

1. **Backend**: Node.js + Express with MongoDB for storing user data.
2. **Frontend**: React app with JWT handling for protected routes.

---

## 🛠️ Features

- **User Registration**: Users can sign up with a username, email, and password.
- **Login**: Users can log in to get a JWT token.
- **Protected Routes**: A dashboard page that only authenticated users can access.
- **Logout**: Clears the JWT from localStorage and redirects to login.
- **JWT Authentication**: Secure login and token-based authentication for the backend.

---

## 📂 Project Structure

- `client/`: Contains the React frontend.
- `server/`: Contains the Node.js backend API.

---

## 🚀 Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/fullstack-dashboard.git
cd fullstack-dashboard
```

2. Backend Setup (Node.js & MongoDB)
   cd server
   npm install

Configure environment variables:
Create a .env file in the server/ folder with the following content:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Start the backend server:
npm run dev

# Or if you don't have nodemon installed:

node index.js

Your backend should now be running at http://localhost:5000.

3. Frontend Setup (React)

Install dependencies:

cd client
npm install

Configure environment variables:
Create a .env file in the client/ folder with the following content:

REACT_APP_API_URL=http://localhost:5000/api

Start the React frontend:

npm start

Your React app should now be running at http://localhost:3000.

🧑‍💻 API Endpoints
POST /api/register:

Registers a new user with username, email, and password.

Response: { msg: "User registered successfully" }

POST /api/login:

Logs in an existing user with email and password.

Response: { token: "JWT_TOKEN_HERE" }

GET /api/dashboard:

A protected route requiring a valid JWT token in the Authorization header.

Response: { msg: "Welcome to the dashboard, user USER_ID" }

📌 Notes
JWT Token: The frontend stores the JWT in localStorage and sends it with every protected request.

User Authentication: This is a simple user authentication system using JWTs. For production, consider using more secure practices (like HTTPS, token expiration, etc.).
