import React from 'react'
import db from '../config/db'
import { Redirect } from "react-router-dom";

const User = () => {
  return (
    <>
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