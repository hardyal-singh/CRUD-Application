 # MERN Stack Project:CRUD-Application

Welcome to our MERN (MongoDB, Express.js, React.js, Node.js) stack project! This project is divided into two main folders: Client for the frontend and Server for the backend.

## Frontend

### Technologies Used

1.**Vite Bundler**: Used for fast and efficient frontend development.

2.**Packages**:
'@reduxjs/toolkit': State management library for managing global application state.

'react-dom': React library for DOM rendering.

'react-hook-form': Library for managing form state and validation.

'uuid': Package for generating unique identifiers.

3.**Environment Variables**: Sensible data is stored in a .env file for security.

4.**Store Folder**: Contains global state management logic using Redux Toolkit.

5.**Services Folder**: Handles backend API calls and data manipulation.

6.**Styling**: Utilized Tailwind CSS for creating visually appealing user interfaces.

7.**Components Folder**: Contains reusable components such as header, login, signup, todos, and addtodos.

8.**Pages Folder**: Houses different pages of the application, incl

9.**Routing**: Implemented client-side routing using react-router-dom.

Backend
Technologies Used
Express.js: Web application framework for Node.js.
Nodemon: Utility to monitor for changes and restart the server.
Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
JSON Web Token (JWT): Used for secure authentication.
Dotenv: Module to load environment variables from a .env file.



### How to Run

1.Clone the project

```bash
  git clone https://github.com/hardyal-singh/CRUD-Application.git
```
2.Setup Environment Variables:

Create a **".env"** file in the Client folder and add sensitive data:
```bash
  VITE_APP_BASE_URL=YOUR_BACKEND_API_URL
```

3.Go to the project directory

```bash
  cd Client
```

4.Install dependencies

```bash
  npm install
```

5.Start the server

```bash
  npm run dev
```


## Backend
### Technologies Used

**Express.js:** Web application framework for Node.js.

**Nodemon:** Utility to monitor for changes and restart the server.

**Mongoose:** MongoDB object modeling tool designed to work in an asynchronous environment.

**JSON Web Token (JWT):** Used for secure authentication.

**Dotenv:** Module to load environment variables from a .env file.
### How to Run

1.Go to the project directory

```bash
  cd Server
```

2.Setup Environment Variables:

Create a **".env"** file in the Client folder and add sensitive data:
```bash
MONGO_URI="" // for database connection
PORT="" // application port
JWT_SECRET_KEY="" // jsonwebtoken secret key
FRONTEND_URL="" // paste frontEnd url here..
```

3.Install dependencies

```bash
  npm install
```

4.Start the server

```bash
  npm run start
```
