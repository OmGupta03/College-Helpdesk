🎓 Student Complaint Management System
📖 Overview

The Student Complaint Management System is a full-stack web application designed to digitize and streamline the process of handling student grievances in an academic environment. It enables students to submit complaints through a simple interface, while administrators can efficiently manage, track, update, and resolve complaints via a centralized dashboard.

✨ Features

Student complaint registration portal

Admin dashboard to view all complaints

Real-time complaint status tracking (Pending, In Progress, Resolved, Rejected)

Update complaint status

Delete complaints

RESTful API-based backend

🛠️ Tech Stack

Frontend

HTML

CSS

JavaScript

Backend

Node.js

Express.js

⚙️ Project Architecture

Follows a RESTful architecture

Frontend served using Express static middleware

Backend APIs handle complaint creation, retrieval, updating, and deletion

In-memory data storage for simplicity and learning purposes

🚀 How to Run the Project

Clone the repository

git clone <repository-url>


Navigate to the project directory

cd project-folder


Install dependencies

npm install


Start the server

npm start


Open your browser and visit

http://localhost:3000

🔗 API Endpoints
Method	Endpoint	Description
GET	/complaints	Fetch all complaints
POST	/complaints	Register a new complaint
PUT	/complaints/:id	Update complaint status
DELETE	/complaints/:id	Delete a complaint
🎯 Purpose

This project is developed for academic and learning purposes to demonstrate core concepts of full-stack development, RESTful API design, and frontend–backend communication using Node.js and Express.js.
