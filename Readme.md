# Code with Shubham

## Overview
**Code with Shubham** is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This platform serves as a hub for coding tutorials, project showcases, and tech-related articles.

## Features
- User authentication (JWT-based login & signup)
- Blog section for coding tutorials
- Project showcase with live demos
- User dashboard for profile management
- Contact form for inquiries
- Responsive UI built with React and Tailwind CSS

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JSON Web Tokens (JWT)
- **Hosting:** Vercel (Frontend), Render/Heroku (Backend), MongoDB Atlas

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/code-with-shubham.git
   ```
2. Navigate to the project folder:
   ```sh
   cd code-with-shubham
   ```
3. Install dependencies for both frontend and backend:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```
4. Set up environment variables in `.env`:
   ```sh
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
5. Start the backend server:
   ```sh
   cd server
   npm run dev
   ```
6. Start the frontend:
   ```sh
   cd client
   npm start
   ```

## Usage
- Open `http://localhost:3000` to view the frontend.
- The backend runs on `http://localhost:5000`.
- Register or log in to access features like blog posting and project submissions.

## Contributing
Feel free to fork the repository and contribute by submitting pull requests.

## License
This project is licensed under the MIT License.



