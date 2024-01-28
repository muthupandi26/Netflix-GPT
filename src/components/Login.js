import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG } from "../utils/Constants";

const Login = () => {
  const dispatch = useDispatch();
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
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div
      className="bg-cover h-[130vh]"
      style={{
        backgroundImage: `url(${BACKGROUND_IMG})`,
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
