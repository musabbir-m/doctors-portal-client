import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [signupError, setSignupError] = useState("");
  const { createUser, googleSignin, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail]= useState('')
  const [token]= useToken(createdUserEmail)


  const navigate= useNavigate()
  if (token){ 
    navigate('/')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignup = (data) => {
    console.log(data);
    setSignupError('');
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user created succesfully");
        const userInfo = {
          displayName: data.name,
        };

        saveUser(data.name, data.email) //declared bellow to save user
        // ***** userInfo OBJECT IS SHOWING ERROR!!!!!!
        // updateUser(userInfo)
        //   .then(() => {
        //     saveUser(data.name, data.emial) //declared bellow to save user in db
        //   })
          // .catch((err) => console.log(err));
      })
      .catch((err) => {
        setSignupError(err);
      });

      const saveUser= (name, email)=>{
        const user= {name, email}
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
         setCreatedUserEmail(email)
        })
        //jwt check

        
      }

      
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Signup</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              {...register("name")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="email"
              {...register("email", { required: "email is required" })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 2,
                  message: "password must be 6 characters or more",
                },
                // pattern: {
                //   value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                //   message: "password must have an uppercase letter, special characters and a number ",
                // },
              })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-5"
            value="Signup"
            type="submit"
          />
          {signupError && <p className="text-red-600">{signupError}</p>}
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-secondary" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>

        <button className="btn btn-outline w-full">
          {" "}
          CONTINUE WIHT GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
