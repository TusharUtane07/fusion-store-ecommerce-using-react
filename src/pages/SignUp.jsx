import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const SignUp = () => {
  return (
    <>
      <Header />
      <div className="border-2 border-black">
        <form action="">
          <div className="text-3xl  m-auto w-[390px] text text-center font-bold p-5">Sign Up
          <div className=" text-xl font-semibold  m-5">
            <form action="">
              <input type="text" placeholder="Enter your first name" className="border-2 border-black p-3 m-3"/>
              <input type="text" placeholder="Enter your last name" className="border-2 border-black p-3 m-3"/>
              <input type="text" placeholder="Enter your email" className="border-2 border-black p-3 m-3"/>
              <input type="text" placeholder="Enter your password" className="border-2 border-black p-3 m-3"/>
              <button className="text-3xl border-2 border-black p-3 px-9 bg-green-400 text-black">Create Account</button>
            </form>
          </div>
          </div>
          
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
