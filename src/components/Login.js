import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // checkValidData
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div
      className="bg-cover h-[130vh]"
      style={{
        backgroundImage:
          'url("https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_medium.jpg")',
      }}
    >
      <Header />
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-black p-12 rounded-md bg-opacity-80">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-8 "
        >
          <h1 className="font-bold text-3xl py-4 text-white">
            {isSignInForm ? "Sign In " : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-72 h-12 p-2 rounded-md bg-gray-700 text-white"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            ref={email}
            className="w-72 h-12 p-2 rounded-md bg-gray-700 text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-72 h-12 p-2 rounded-md bg-gray-700 text-white"
          />
          <p className="text-red-500 font-bold text-lg py-1"> {errorMessage}</p>
          <button
            className="p-3 bg-red-600 rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In " : "Sign Up"}
          </button>
          <p
            className="py-4 text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now."
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
