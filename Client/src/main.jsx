import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Store } from "./Store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import protected component here..
import {Proctect} from "./components"


// import pages here
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import Errorpage from "./pages/ErrorPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { path: "/", element: (
       <Proctect authentication>
          <HomePage />
          </Proctect>
      ) },
      {
        path:"/*",
        element:<Errorpage/>
      },
      { path: "/login", element:(
        <Proctect authentication={false}>
          <LoginPage />
          </Proctect>
      ) },

      { path: "/signup", element: (
        <Proctect authentication={false}>
          <SignupPage />
          </Proctect>
      ) },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
