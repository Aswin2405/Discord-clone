import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Chat from "./Chat";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login";
import Sidebar from "./Sidebar";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
