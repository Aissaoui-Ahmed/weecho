import React from 'react'
import db from '../config/db'

import { Redirect } from "react-router-dom";


const SideBar = () => {
  const Logout = async () => {
    await db.auth().signOut();
    <Redirect to='/' />
  }
  return (
    <aside>
      <div>
        <div className="image-user"></div>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="logOut-image">
        <svg onClick={Logout} id="bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m15 13c-.553 0-1 .448-1 1v4c0 .551-.448 1-1 1h-3v-15c0-.854-.544-1.617-1.362-1.901l-.296-.099h4.658c.552 0 1 .449 1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3c0-1.654-1.346-3-3-3h-10.75c-.038 0-.07.017-.107.022-.048-.004-.094-.022-.143-.022-1.103 0-2 .897-2 2v18c0 .854.544 1.617 1.362 1.901l6.018 2.006c.204.063.407.093.62.093 1.103 0 2-.897 2-2v-1h3c1.654 0 3-1.346 3-3v-4c0-.552-.447-1-1-1z" /><path d="m23.707 9.293-4-4c-.286-.286-.716-.372-1.09-.217-.373.155-.617.52-.617.924v3h-4c-.552 0-1 .448-1 1s.448 1 1 1h4v3c0 .404.244.769.617.924.374.155.804.069 1.09-.217l4-4c.391-.391.391-1.023 0-1.414z" /></g></svg>
      </div>
    </aside>
  )
}
export default SideBar