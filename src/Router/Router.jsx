import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Error from "../Components/Error";
import Success from "../Components/Success";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/error',
    element: <Error/>
  },
  {
    path: '/success',
    element: <Success/>
  }
])