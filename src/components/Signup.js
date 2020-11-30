import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../config/db'

const Signup = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [passwd, setPasswd] = useState('')
  const [checkPasswd, setCheckpasswd] = useState('')
  const [isProg, setIsProg] = useState(false)
  const [err, setErr] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (fname === '' || lname === '') {
      setErr('Personale information should not be empty')
    }
    else if (passwd !== checkPasswd) {
      setErr('Password Don\'t match ')
      console.log(passwd, checkPasswd)
    }
    else {
      setIsProg(true)
      db.auth()
        .createUserWithEmailAndPassword(email, passwd)
        .then((response) => {
          const uid = response.user.uid;
          const data = {
            id: uid,
            fname,
            lname,
            email,
            passwd,
            phoneNUmber: tel,
          };
          const usersRef = db.database().ref(`u/${uid}`);
          usersRef
            .set(data)
        })
        .catch((err) => {
          setIsProg(false)
          setErr(err.message);
        });
    }
  }
  return (
    <div className="px-sm-1 py-3 p-md-3 col-md-9 offset-md-3 offset-lg-3 col-sm-12 col-lg-9 col-xl-9 vh-100">
      <div>
        <h6 className="text-right">Already have an account?
        <Link to="/login">login</Link>
        </h6>
      </div>
      <div className="pt-2 px-3">
        <div className="mt-5 px-1 px-md-1 px-lg-3 px-xl-5">
          <h2 className="px-3">Create an account</h2>
          <div className="px-sm-2 px-md-4">
            <div className={err == null ? "d-none" : "alert alert-danger "} role="alert">
              {err}
            </div>
          </div>
          <form action="/" method="POST" id="mrof">
            <div>
              <div className="input-group px-sm-1 px-md-3">
                <input
                  name="fname"
                  value={fname}
                  onChange={(ev) => setFname(ev.target.value)}
                  type="text"
                  required
                  className="input form-control mx-2 py-4"
                  placeholder="First name *" />

                <input
                  name="lname"
                  type="text"
                  value={lname}
                  required
                  onChange={(ev) => setLname(ev.target.value)}
                  className="input form-control mx-2 py-4"
                  placeholder="Last name *" />
                <br></br>
              </div>
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
              <div className="input-group px-sm-1 px-md-3">
                <input
                  value={tel}
                  onChange={(ev) => setTel(ev.target.value)}
                  name="tel"
                  type="tel"
                  required
                  className="input form-control py-4 mx-2" placeholder="Phone Number *" />
              </div>
              <div className="input-group px-sm-1 px-md-3 my-2">
                <input
                  value={passwd}
                  onChange={(ev) => setPasswd(ev.target.value)}
                  name="passwd"
                  required
                  type="password"
                  className="input form-control  mx-2 py-4" placeholder="password *" />
                <input
                  value={checkPasswd}
                  onChange={(ev) => setCheckpasswd(ev.target.value)}
                  name="checkPasswd"
                  type="password"
                  required
                  className="input form-control  mx-2 py-4" placeholder="Confirme password *" />
              </div>
              <div className="input-group px-sm-1 px-md-3">
                <p className="px-sm-1 px-md-3">by registring you are agree on
                <Link to='/terms'>Terms & condition</Link> of weecho service</p>
              </div>
              <div className="input-group px-sm-1 px-md-3 my-2">
                {isProg ?
                  <div className="svgLoading py-sm-2 py-md-2 mx-2">
                    <svg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                      <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">
                        <circle cx="22" cy="22" r="6" stroke-opacity="0">
                          <animate attributeName="r"
                            begin="1.5s" dur="3s"
                            values="6;22"
                            calcMode="linear"
                            repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity"
                            begin="1.5s" dur="3s"
                            values="1;0" calcMode="linear"
                            repeatCount="indefinite" />
                          <animate attributeName="stroke-width"
                            begin="1.5s" dur="3s"
                            values="2;0" calcMode="linear"
                            repeatCount="indefinite" />
                        </circle>
                        <circle cx="22" cy="22" r="6" stroke-opacity="0">
                          <animate attributeName="r"
                            begin="3s" dur="3s"
                            values="6;22"
                            calcMode="linear"
                            repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity"
                            begin="3s" dur="3s"
                            values="1;0" calcMode="linear"
                            repeatCount="indefinite" />
                          <animate attributeName="stroke-width"
                            begin="3s" dur="3s"
                            values="2;0" calcMode="linear"
                            repeatCount="indefinite" />
                        </circle>
                        <circle cx="22" cy="22" r="8">
                          <animate attributeName="r"
                            begin="0s" dur="1.5s"
                            values="6;1;2;3;4;5;6"
                            calcMode="linear"
                            repeatCount="indefinite" />
                        </circle>
                      </g>
                    </svg>
                  </div>
                  :
                  <input type="submit" onClick={handleSubmit} className="btn py-sm-3 py-md-3 register-btn mx-2" value="REGISTER For Free" />
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}
export default Signup;