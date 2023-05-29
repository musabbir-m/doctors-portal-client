import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Reviews from "../../Pages/Home/Testimonials/Reviews";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },

      { path: "/login", element: <Login> </Login> },
      { path: "/appointment", element: <Appointment></Appointment> },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/reviews", element: <Reviews></Reviews> },
    ],
  },
  //Layout for dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children:[
      {
        path:'/dashboard', element:<MyAppointment></MyAppointment>
      },
    //   {
    //     path:'/dashboard/allusers', 
    //     element: 
    //   }
    ]
  },
]);

export default router;
