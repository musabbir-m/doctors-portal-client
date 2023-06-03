import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Shared/Loading/Loading";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    //loaded single booking for which we will pay
  const booking = useLoaderData();
  //show loading spinner using react-router useNavigation hook
  const navigation= useNavigation()
  const { treatment, price, slot, appointmentDate } = booking;
  if(navigation.state=== "loading"){
    return <Loading></Loading>
  }

  return (
    <div>
      <h3>Booking for {treatment}</h3>
      <p className="text-xl">
        Please Pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm 
          booking={booking}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
