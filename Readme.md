# E-Commerce Application

# Milestone 1: Project Overview

This project is a simple e-commerce web application that includes core functionalities such as user authentication, product display, order management, and a payment gateway.

User Authentication:
Registration and log in process

Product Page:
Displays the products

Order Page:
Shows order details of each product

Payment Gateway:
payment process for the products oredered.

# Milestone 2:
1.Setup Frontend:

1.Tailwind CSS(npm install -D tailwindcss)

2. React(npm create vite@latest frontend).

2.Set up the Backend

1.Initialization (npm init)
This is for creating a package.json file which keeps track of all dependencies and metadata used by a project.

2. Installing packages
express (npm i express ):Used for routing and handling the logic in a server.

mongoose(npm i mongoose):connect and interact with MongoDB, schema-based solution for data management.

cors (npm i cors):cross-origin requests are necessary for frontend-backend communications.

nodemon (npm i nodemon):automatically reboots the server on changing files, which makes further development more efficient.

After all these configurations, this project is ready for complete full-stack development.

# Milestone 3:
1. Setting Up Node.js Server

    Installed necessary packages such as express, dotenv.
    Created a server file (server.js or app.js) to define routes and middleware.

2. Connecting to MongoDB

    Defined connection configurations in a .env file 

3. Connecting Database and Server
    In the DB folder database.js file is created to connect MongoDB.

4. Error Handling

    Used try-catch blocks for async operations to handle promise rejections.

# Milestone 4:

1. User Model
    1. created a file named user.model.js in the models directory.
    2. Define schema using mongoose
2. Setting up controllers
    1. Created a file named user.controller.js in the controllers directory.
3. Enabling file uploads using multer
    1. Install multer(npm i multer)
    2. Update the Controller
    3. Update the routes.

# Milestone 5:
1. Created a signup page
    1.  Created input field for entering the name,email,password and file uploading.
2. Created validation Object using Regular expession
    1. checks the name has more than or equal to 2 letters and has no symbols.
    2. checks the password has more than 8 characters and less than 128 characters.And checks it has lowercase,uppercase,and special characters.
    3. checks the email is in correct format
3. Setup React-Router for the Present Pages.



