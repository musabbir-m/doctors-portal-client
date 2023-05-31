import React from "react";

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
  const { name, slots,price } = appointmentOption;
  return (
    <div className="card w-80 mx-auto shadow-xl mt-10">
      <div className="card-body text-center">
        <h2 className=" text-secondary font-bold text-2xl"> {name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <label 
          htmlFor="booking-modal" 
          className="btn btn-primary text-white"
          onClick={()=>setTreatment(appointmentOption)}
          disabled= {slots.length===0}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
