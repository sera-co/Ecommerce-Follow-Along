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


# Milestone 6:
1. Generate a JWT Token at Signup:
    1. Install the jsonwebtoken.(npm i jsonwebtoken)
2. Create a Verification Link
    1. Generate a verification link containing the token.
3. Configure Nodemailer to Send Emails

    1. Install Nodemailer.(npm i nodemailer)
    2. Use the function to send the verification link to the user's email address.

4. Create an Endpoint to Verify the Token

    1. Develop an API endpoint that verifies the token and activates the user's account.

# Milestone 7:
1.Signup:

    1.Check Existing User: Verify if the user is already registered in the database. 
    
                           If found, prompt them to log in directly.
                           
    2.Create New User: If the user is not registered, securely hash their password using bcrypt.js.
    
                       Then, create a new user entry with their name, email, and hashed password, and save it in the database.
                       
2.Login:

    1.Validate User: Confirm that the user exists in the database and verify their password.
    
                     If the credentials are correct, generate a token and send it as cookies.
                     
                     If the user is not found or the password is incorrect, return a message suggesting they sign up.

# Milestone 8:

1.Create the Card Component

    1.Design a flexible and reusable card component that can display product information dynamically.
    
    2.Make the component accept props to customize its content, including:
    
            1.Product Name
            2.Product Image
            3.Product Price
            
2.Design the Homepage Layout

    1.Implement a visually appealing layout for the homepage.
    
    2.Arrange multiple instances of the card component in a structured and symmetrical grid to provide a clean, organized look.

# Milestone 9:
1.Created a product form which includes:
    1.title
    2.description
    3.rating
    4.discounted price
    5.original price
    6.quantity
    7.category
    8.images
2.Used form data to send the data.

# Milestone 10:
1.Product Schema
    -Use Mongoose to define the schema.
    -Ensure proper data validation.


2. Endpoint Creation
    -Build a POST endpoint to receive and validate product data

# Milestone 11:
1. Created an endpoint and connected the server to the database,retrieves data and send as a response in JSON format.
2. wrote a query to fetch the data.

# Milestone 12:
1. Created an endpoint that retrieves product details and sends it as a JSON response.
2. Connect to database
3. Use axios to call the API.

# Milestone 13:

1. Created an endpoint to handle data updates
2. Received data through HTTP requests and updates the products added in the database.
3. An edit button is added.
4. Clicking the button directs to a form with datas aldready given.

# Milestone 14:

1. Created an endpoint to delete data from the database.
2. Adds a delete button
3. when the delete button is clicked the product data is deleted from the database.

# Milestone 15:

1. Added a Navbar component.
2. It is responsive design.

# Milestone 16:
1. View details of product title,description,rating,price,category
2. Display images of the product

# Milestone 17:
1. Defined a schema to store products.
2. Endpoint to add product to cart.

# Milestone 18:
1. Add an endpoint to recieve requests from cart page
2. Add an enpoint to fetch all products.

# Milestone 19:
1. Added cart UI
2. the cart page displays all the products added to the cart.
3. the cart items for each logged in user are fetched from the backend.

# Milestone 20:
1. Created an endpointto fetch user data and profile details.
2. Display user profile.

# Milestone 21:
1. Taking user input :city,country,add1,add2,zipcode,adressType
2. storing it using useState

# Milestone 22:
1. Takind address details entered by the user.
2. Adding the address to the database.
3. Displaying it in the profile Page.

# Milestone 23:
1. Checkout button in cart Page.
    - Added a 'Checkout' button in Cart Page.
    - It navigates to select address page
2. Select Address Page
    - displays the addresses from the database.

# Milestone 24:
1. Selecting the adress fom select address page.
2. Goes to order confirmation page.
3. Display all the products from the cart.
4. Also calculates the order total.
5. Place Order button at the bottom of the page.

# Milestone 25:
1. Retrieve userid based on user's email.
2. create orders for product.
3. store the order details in the MongoDB collection.

# Milestone 26:
1. Retrieve user id based on the email.
2. Create seperate orders.
3. Store the order details in database.
4. Provide an endpoint to retrieve all orders.

# Milestone 27:
1. Fetch user orders from the database.
2. Displays order details.

# Milestone 28:
1. Display cancel button.
2. When cancelled hide the button.
3. Provide an endpoint to cancel an order.
4. Update order status.

# Milestone 29 and 30:
1. Create PayPal Developer account – Sign in or create an account on the PayPal Developer Dashboard.
2. Access Sandbox Accounts – Navigate to the Sandbox Accounts section to find test accounts. Copy and save the User ID.
3. Obtain PayPal Client ID – Locate your sandbox account, copy the Client ID, and store it securely for API integration.
4. Payment Options – The order confirmation page should support Cash on Delivery (COD) and Online Payment via PayPal.
5. UI Implementation – Add radio buttons for payment selection. When "Online Payment" is selected, dynamically display PayPal payment buttons.

# Milestone 31:

1. Install Package – Run `npm install react-redux` to install the required package.  

2. Create Store Folder– Inside the project, create a `store` folder with two files:  
   - `store.js` – Configures the Redux store and defines `userReducer` to manage the email state.  
   - `userActions.js` – Contains the `setEmail` function to update the global email state.  

3. Implement Store & Reducer – Configure the Redux store in `store.js` and define `userReducer` to handle email updates.  

4. Define Action – Implement `setEmail` in `userActions.js` to modify the global email state.  

5. Wrap App with Provider – In `index.js`, wrap the `App` component with the `Provider` and pass the store as a prop.

# Milestone 32:

1. Login Page – Use the `dispatch` method to store the user's email in the global state upon login.  

2. Access Email in Other Pages – Retrieve the stored email using `useSelector` from Redux in other pages.  

3. State Persistence– Ensures the email remains available throughout the app without manually passing props.

# Milestone 33:
1. Install jsonwebtoken.
2. generate JWT token.
3. Set expiration time using maxAge to control the validity of the generated token.
4. Store the token in a cookie and send it in the response.
































