import React, { useState } from 'react'
import db from '../config/db'

const RightRestSide = () => {
  const [email, setEmail] = useState('')
  const [err, setErr] = useState(null)
  const [succes, setSucces] = useState(null)
  const [isProg, setIsProg] = useState(false)
  const SendResetPassword = () => {
    setIsProg(true)
    db.auth().sendPasswordResetEmail(email).then(() => {
      setSucces('Done, Check your inbox')
      setErr(null)
      setIsProg(false)
    })
      .then(() => {
        setTimeout(() => window.location = '/login', 3000)
      })
      .catch((err) => {
        setIsProg(false)
        setSucces(null)
        setErr(err.message)
      });
  }
  return (
    <div className="px-sm-1 py-3 p-md-3 col-md-9 offset-md-3 offset-lg-3 col-sm-12 col-lg-9 col-xl-9 vh-100">
      <div className="mt-5">
        <div className="mt-5 px-1 px-md-1 px-lg-3 px-xl-5">
          <h2 className="px-3 mb-5">Forget password</h2>
          <div className="px-sm-2 px-md-4">
            <div className={err == null ? "d-none" : "alert alert-danger "} role="alert">
              {err}
            </div>
            <div className={succes == null ? "d-none" : "alert alert-success "} role="alert">
              {succes}
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
                  <input type="submit" onClick={SendResetPassword} className="btn py-sm-3 py-md-3 register-btn mx-2" value="RESET" />
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}
export default RightRestSide;