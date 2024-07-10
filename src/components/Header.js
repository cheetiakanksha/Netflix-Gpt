import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES, cLogo, logo } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
    }).catch((error)=>{

    });
  }
  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName: displayName}));
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate('/')
        }
      });
    return ()=>unsubscribe();} ,[]);
    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearchView());
    }
    const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));
    }
    return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between ">
      <img className="w-44 mx-auto md:mx-0"alt="netflix-logo" src={cLogo}></img>
      {user &&(<div className='flex p-2 justify-between'>
        {showGptSearch &&<select className='bg-gray-900 text-white p-2 m-2' onClick={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier}value={lang.identifier}>{lang.name}</option>)}

        </select>}
        <button onClick={handleGptSearchClick} className='   text-white px-2 m-4 hover:font-bold'>{!showGptSearch?"GPT search" :"Home"}</button>
        <img className=' none md:inline-block w-12 h-12' src={logo}></img>
        <h3>{user.name}</h3>
        <button className='text-white px-2' onClick={handleSignOut}>sign out</button>
      </div>)}

    </div>
    
  )
}

export default Header
