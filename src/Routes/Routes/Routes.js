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
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>
    ,
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
    errorElement: <DisplayError></DisplayError>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children:[
      {
        path:'/dashboard', element:<MyAppointment></MyAppointment>
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment/>,
        loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
      }

    ]
  },
]);

export default router;
