import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [passwd, setPasswd] = useState('')
  const [err, setErr] = useState(null)

  const handleSubmit = (event) => {
    const form = document.getElementById('mrof')
    event.preventDefault()
    if (email !== '' && passwd !== '') {
      setErr('Fill the inputs ')
    }
    else {
      form.submit()
    }

  }
  return (
    <div className="px-sm-1 py-3 p-md-3 col-md-9 offset-md-3 offset-lg-3 col-sm-12 col-lg-9 col-xl-9 vh-100">
      <div>
        <h6 className="text-right">Do not have an account?
        <Link to="/register">Register</Link>
        </h6>
      </div>
      <div className="mt-5">
        <div className="mt-5 px-1 px-md-1 px-lg-3 px-xl-5">
          <h2 className="px-3 mb-5">Welcome Back</h2>
          <div className="px-sm-2 px-md-4">
            <div className={err == null ? "d-none" : "alert alert-danger "} role="alert">
              {err}
            </div>
          </div>
          <form action="/" method="POST" id="mrof">
            <div>
              <div className="input-group px-sm-1 px-md-3 my-2">
                <input
                  name="email"
                  type="email"
                  value={email}
                  required
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="input form-control py-4 mx-2"
                  placeholder="E-mail *" />
              </div>
              <div className="input-group px-sm-1 px-md-3 my-2">
                <input
                  value={passwd}
                  onChange={(ev) => setPasswd(ev.target.value)}
                  name="passwd"
                  required
                  type="password"
                  className="input form-control  mx-2 py-4" placeholder="password *" />
              </div>

              <div className="input-group px-sm-1 px-md-3 my-2">
                <input type="submit" onClick={handleSubmit} className="btn py-sm-3 py-md-3 register-btn mx-2" value="LOGIN" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}
export default Login;