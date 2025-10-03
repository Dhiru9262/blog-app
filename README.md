# blog-app
this is for internship
Blog App

A full-stack web application with authentication, a dashboard, and task management, built with React.js (frontend), Node.js + Express (backend), and MongoDB. This project demonstrates JWT-based authentication, protected routes, and CRUD operations.

Features
Frontend

Built with React.js and TailwindCSS for responsive UI

Login/Register forms with client-side validation

Protected routes: Dashboard accessible only to authenticated users

Dashboard:

Display user profile

Add, update, delete tasks

Mark tasks as completed

Logout functionality

Backend

Built with Node.js + Express

MongoDB database integration

User Authentication:

Passwords hashed with bcrypt

JWT-based login and protected routes

Task CRUD APIs linked to the logged-in user

Error handling and validation

Tech Stack
Frontend	Backend	Database
React.js	Node.js	MongoDB
TailwindCSS	Express.js	Mongoose
Axios	JWT	
React Router DOM	Bcrypt.js	
Getting Started
1. Clone the repository
git clone https://github.com/<username>/blog-app.git
cd blog-app

2. Backend Setup
cd backend
npm install


Create a .env file in backend/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Start the backend server:

npm run dev
# or
node server.js

3. Frontend Setup
cd ../frontend
npm install


Start the frontend server:

npm start


App will run at http://localhost:5173 .

Frontend calls backend APIs at http://localhost:5000/api
