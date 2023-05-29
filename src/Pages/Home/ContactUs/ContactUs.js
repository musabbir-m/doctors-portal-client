import React from 'react';
import appointment from "../../../assets/images/appointment.png"
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
       <section style={{background: `url(${appointment})`}}
        className='mx-auto text-center py-16 my-auto rounded-lg'>
        <h4 className='text-xl font-bold text-primary'>Contact Us</h4>
        <h2 className='text-4xl font-semibold text-white'>Stay Connected With Us</h2>
        <div className='mt-10 grid grid-cols-1 gap-5 w-[450px] mx-auto'>
        <input type="email" placeholder="Email Address" className="input w-full" />
        <input type="text" placeholder="Subject" className="input w-full" />
        <textarea className="textarea mb-3" placeholder="Message"></textarea>
        
        </div>
        <PrimaryButton >Submit</PrimaryButton>
       </section>
    );
};

export default ContactUs;