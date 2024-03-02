# React and Node.js Application with PostgreSQL Database

## Project Overview

This repository contains a full-stack web application built using React for the frontend, Node.js for the backend, and PostgreSQL as the database. The application includes the following functionalities:

1. **Database Initialization:**
   - The application initializes a PostgreSQL database with 50 records. The database schema includes columns for "sno," "customer name," "age," "phone," "location," and "created_at." Dummy data is provided for testing purposes.

2. **Single Page Application (SPA):**
   - The frontend is implemented as a Single Page Application using React. It provides a user-friendly interface to interact with the data.

3. **Data Display in Table Format:**
   - The application displays the database records in a tabular format on the webpage.
   - The table includes columns for "Sno," "Customer Name," "Age," "Phone," "Location," "Date," and "Time."

4. **Search Functionality:**
   - Users can search the displayed data based on the "Name" or "Location" columns.
   - The search feature provides a dynamic and efficient way to find specific records.

5. **Pagination:**
   - The table supports pagination, displaying 20 records per page.
   - Users can navigate through different pages to explore the entire dataset.

6. **Sort Option:**
   - The application allows users to sort the data either by "Date" or by "Time."
   - Clickable headers for "Date" and "Time" facilitate sorting in ascending or descending order.

## Getting Started

Follow these steps to set up and run the application locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies:**
   ```bash
   # Navigate to the frontend folder
   cd frontend
   npm install

   # Navigate to the backend folder
   cd ../backend
   npm install
   ```

3. **Run the Application:**
   ```bash
   # Start the backend server
   cd backend
   node server.js

   # Start the React app in a separate terminal
   cd ../frontend
   npm start
   ```

4. **Access the Application:**
   - Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the React app.

## Additional Information

- The database configuration can be adjusted in the backend's `server.js` file.
- Customize the application according to your specific requirements and extend its functionality as needed.

Feel free to explore and contribute to the development of this application! If you encounter any issues or have suggestions, please create an issue in the repository.
