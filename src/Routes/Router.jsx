import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import Product from "../Pages/Product/Product";
import SingleProduct from "../Layouts/SingleProduct";
import PrivateRoute from "../providers/PrivateRoute";
import AddToy from "../Pages/AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <Product></Product>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/add-toys",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
