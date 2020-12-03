import React from 'react'
import db from '../config/db'
import { Redirect } from "react-router-dom";
import SideBar from '../components/Sidebar';

const User = () => {
  return (
    <>
      <SideBar />
      <h1>Welcome !</h1>
      <button
        onClick={async () => {
          await db.auth().signOut();
          <Redirect to='/' />
        }}>
        SIGN OUT</button>
    </>)
}
export default User;