import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import { format, set } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../../../Components/BookingModal/BookingModal";
import Loading from "../../Shared/Loading/Loading";
import AppointmentOptions from "./AppointmentOptions";

const AvaliableAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions]= useState([])
  const date = format(selectedDate, "PP");
  const [treatmentName, setTreatmentName] = useState(null);

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date], //data is state parameter
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/v2/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      console.log(data);
      return data;
      
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-16">
      <p className="text-xl text-bold text-center text-primary">
        You have selected: {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatmentName}
          ></AppointmentOptions>
        ))}
      </div>

      {treatmentName && (
        <BookingModal
          treatmentName={treatmentName}
          selectedDate={selectedDate}
          setTreatment={setTreatmentName}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvaliableAppointment;
