import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./router/Home.jsx";
import Error404 from "./router/Error404.jsx";
import Login from "./router/Login.jsx";

const routes = createBrowserRouter([
  {
    path: "/", element: <App />, errorElement: <Error404 />, children: [
      { path: "/", element: <Login /> },
      { path: "/home", element: <Home /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
);
