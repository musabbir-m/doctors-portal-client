import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const error= useRouteError()
    const { logOut } = useContext(AuthContext);
    const navigate= useNavigate()
  const handleSignout = () => {
    logOut()
      .then(() => {
        alert("user logged out")
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };
    return (
        <div>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-red-400'>{error.statusText || error.message }</p>
            <h4 className='text-3xl'> Please <button onClick={handleSignout}>Sign out</button> and Log back in </h4>
        </div>
    );
};

export default DisplayError;