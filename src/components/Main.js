import React from 'react';
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main className="row justify-content-between align-items-center" id="main">
      <div className="col-lg-6 col-md-6 col-sm-12 text-center mt-5">
        <h1>Build communications with your consumers
          easily on <span id="we-brand">weecho</span>.</h1>
        <p className=" text-center">
          Weecho platform for handling <br></br> many users in each time
        </p>
        <Link className="btn btn-register py-3 px-3" to="/register">Register</Link>
        <Link className="btn btn-learn-more py-3 px-3">learn More</Link>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12" id="work">
      </div>
    </main >
  )
}
export default Main;