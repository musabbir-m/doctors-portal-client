import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvaliableAppointment from '../AvailableAppointment/AvaliableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
          <AppointmentBanner
          selectedDate={selectedDate}
          setSelectedDate= {setSelectedDate}
          >
          </AppointmentBanner>

          <AvaliableAppointment
          selectedDate={selectedDate}
          
          ></AvaliableAppointment>
        </div>
    );
};

export default Appointment;