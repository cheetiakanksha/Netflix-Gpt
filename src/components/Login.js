import React, { useState ,useRef} from 'react'
import Header from './Header'
import { validateinfo } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { bgImg } from '../utils/constants';
const Login = () => {
    const [isSignInForm, setIsSignInForm]=useState(true);
    const [toggleLearnMore, setToggleLearnMore]=useState(false);
    const [errMsg, setErrMsg]=useState(null);
    const name= useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const dispatch=useDispatch();
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const learnInfo=(event)=>{
        event.preventDefault();
        setToggleLearnMore(true);
    }
    const handleButtonClick=(event)=>{
        event.preventDefault();
        const n1 = name.current ? name.current.value : null;
        const error = validateinfo(n1,email.current.value,password.current.value);
        setErrMsg(error);
        console.log(errMsg);
        console.log(isSignInForm);
        if (error) return ;
        if (!isSignInForm){
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
           updateProfile(user,{
            displayName:name.current.value})
          
        }).then(()=>{
            const { uid, email, displayName}= auth.currentUser;
            dispatch(addUser({ uid:uid, email:email, displayName:displayName}));
    
        }).catch((error)=>{
            setErrMsg(error);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorMessage+"-"+errorCode)
        });
            }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMsg(errorMessage+"-"+errorCode)
  });
        }
        }

  return (
    <div>
     
      <Header/>
      <div className='absolute'>
      <img className='h-screen object-cover' alt="logo" src={bgImg}></img>

      </div>
      <form onSubmit={(e)=>e.preventDefault()}className='text-white absolute w-full md:w-3/12 p-2 m-2 bg-black my-36 mx-auto right-0 left-0 rounded-md bg-opacity-80'>
      <div className="p-2 m-2">
      <h1 className='text-xl md:text-3xl font-extrabold m-2 py-2 '>{isSignInForm? "Sign In" :"Sign Up "}</h1>
        {!isSignInForm && (<input ref={name} type="text" placeholder="Full name" className=" p-2 m-2 w-full rounded-md bg-gray-700"></input>)}
        <input ref={email} type="text" placeholder="Email address" className="w-full p-2 m-2  rounded-md bg-gray-700"></input>
        <input ref ={password} type="password" placeholder="password" className="w-full p-2 m-2  rounded-sm bg-gray-700"></input>
        {errMsg && (<p className='p-2 m-2 text-red-700 w-full'>{errMsg}</p>)}
        <button className='p-2 m-2 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm? "Sign In" :"Sign Up "}</button>
        <h1 className='font-normal text-gray-400 text-center '>OR</h1>
        <button className='p-2 m-2 bg-gray-400 w-full rounded-lg'>Use a sign-in code</button>
        <h2  className='p-2 m-2 text-center'>Forgot password?</h2>
        <input className="mx-2"type="checkbox" id="rememberme"></input>
        <label className=" mx-1"for="rememeberme">Remember me</label>
        <p className='text-gray-400 px-2'>{isSignInForm? "New to Netflix?" :" Already registered? "}<h3 className='text-white inline-block px-1'onClick={toggleSignInForm}>{isSignInForm? "Sign up now.":" Sign in now.  "}</h3></p>
        <p className='text-gray-400 font-extralight p-2 pb-0 text-sm '>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        <button onClick={learnInfo} className='inline-block text-blue-700  font-extralight text-sm px-2'>{toggleLearnMore ?"":"Learn more."} </button>
        {toggleLearnMore && (
          <p className='text-gray-400 font-extralight px-1 text-sm justify-evenly'>
            The information collected by Google reCAPTCHA is subject to the Google Privacy Policy
            and Terms of Service, and is used for providing, maintaining and improving the
            reCAPTCHA service and for general security purposes (it is not used for personalised
            advertising by Google).
          </p>
        )}
        </div>
        
      </form>
    </div>
  )
}

export default Login
