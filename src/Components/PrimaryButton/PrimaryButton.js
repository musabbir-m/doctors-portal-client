import React from 'react';
//remember this technique
const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary h-14 bg-gradient-to-r from-primary to-secondary">
        {children   }
      </button>
    );
};

export default PrimaryButton;