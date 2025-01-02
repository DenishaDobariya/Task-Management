## Task Management App

## Overview

- The Task Management App is a web-based application designed to help users efficiently manage their tasks. Users can categorize tasks as important, completed, or incomplete, and perform CRUD (Create, Read, Update, Delete) operations seamlessly. The app features user authentication, responsive design, and an intuitive user interface.

## Features

**Core Features**

- Add Tasks: Users can add new tasks with a title and description.

- Edit Tasks: Modify task details directly from the UI.

- Delete Tasks: Remove tasks permanently.

- Mark as Important: Highlight important tasks for quick reference.

- Mark as Complete: Track completed tasks easily.

**Authentication**

- Sign Up: New users can register with their username and password.

- Login: Existing users can log in to access their tasks.

- Protected Routes: Only authenticated users can access the main dashboard.

**Technology Stack**

- Frontend: React, Redux, Tailwind CSS

- Backend: Node.js, Express.js

- Database: MongoDB

- Authentication: JSON Web Tokens (JWT)

- API Client: Axios

## Installation and Setup

1.**Clone the repository**:

    git clone https://github.com/DenishaDobariya/Task-Management.git
    cd Task-Management

2.**Install dependencies:**
- install npm in both side frontend and backend

      npm install

3.**Configure environment variables:**

- Create a .env file in the root directory.

- Add the following variables:

      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret

4.**Start the development server:**
- For Backend

       npm start

- For frontend

      npm start

## Usage

**Authentication**

- Sign Up: Navigate to the sign-up page and register a new account.

- Login: Use your credentials to log in.

**Task Management**

- Add a Task: Click the "Add Task" button and fill out the form.
 
- Mark as Important: Click the heart icon to mark a task as important.

- Edit a Task: Use the edit icon to update task details.

- Delete a Task: Use the delete icon to remove a task.

      
  
