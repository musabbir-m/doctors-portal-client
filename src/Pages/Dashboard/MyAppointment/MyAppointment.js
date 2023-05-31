import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import BookingModal from "../../../Components/BookingModal/BookingModal";
import { AuthContext } from "../../../context/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [], isLoading} = useQuery({
    //data:booings=[] is default, like initial state value
    queryKey: ["bookings"], //here user?.email is a dependency, it's also the req.param
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("doctorsPortalToken")}`,
        },
      });

      const data = await res.json();
      console.log("Bookings", data);
      return data;
    },
  });

  if(isLoading){
    return <p>Loading..</p>

  }
  return (
    <div>
      <h3 className="text-3xl">My Appointment</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th> Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appoinmentDate}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
