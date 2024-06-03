import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Layout from "./Layout";
import TermsandPolicy from "./TermsandPolicy";
import Error from "./Error";

//by using this one we are create routes
let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <App />,
      },

      {
        path: "about",
        element: <About />,
        children:[
          {
            path:"hello",
            element:<TermsandPolicy/>
          }
        ]
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
