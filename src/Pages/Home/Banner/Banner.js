import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
  
      <div className="hero ">
        <div
          className=" bg-cover bg-no-repeat hero-content flex-col lg:flex-row-reverse"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <img alt="" src={chair} className="rounded-lg shadow-2xl lg:w-1/2" />
          <div>
            <h1 className="text-5xl  font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    
      
     
   
  );
};

export default Banner;
