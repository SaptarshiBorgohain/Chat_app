import React, { useEffect } from 'react';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import IMessage from './IMessage';
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

useEffect(() => {
   auth.onAuthStateChanged(authUser => {
     if (authUser) {
       // user loged in
       dispatch(login({
         uid: authUser.uid,
         photo: authUser.photoURL,
         email: authUser.email,
         displayName: authUser.displayName,
       }))
     } else {
       // user loged out
       dispatch(logout())
     }
   })
}, [])

  return (
    // BEM naming convention
    <div className="app">
      {user ? <IMessage/> : <Login /> }
      

    </div>
  );
}

export default App;
