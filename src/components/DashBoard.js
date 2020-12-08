import React, { useState } from 'react'

const DashBoard = () => {
  const [body, setBody] = useState('')
  const [num, setNumber] = useState(0)
  const [err, setErr] = useState(null)

  const SendMessage = (event) => {
    event.preventDefault()
    if (num === '' || body === '') {
      setErr('Message or Number Can\'t be embty')
    }
    else { fetch() }
  }
  const uploadFile = (eve) => {
    const file = document.getElementById('file')
    file.click()
  }
  return (
    <div className="row">
      <div className="col-12 m-3 p-4 quick-sender">
        <div className="px-sm-2 px-md-4">
          <div className={err == null ? "d-none" : "alert alert-danger"} role="alert">
            {err}
          </div>
        </div>
        <form>
          <div className="input-group px-sm-2 px-md-4 my-2 pinned">
            <textarea
              className="form-control my-2 mr-2 py-2 input qs-input"
              onChange={(val) => setBody(val)}
              placeholder='Write down message to send'></textarea>
            <input
              onChange={(val) => setNumber(val)}
              className="form-control my-2  py-4 input qs-input"
              type="tel" placeholder="Phone number" />
            <br></br>
            <button
              onClick={SendMessage}
              className="send-button py-sm-2 py-md-2">SEND</button>
          </div>
        </form>
      </div>
      <div className="col-4 file-devision py-4 m-3">
        <button onClick={uploadFile} className="custom-file-upload" >
          Upload *.json <br></br> or *.exel
        </button>
        <input type="file" id="file" />
      </div>
      <div className="col-8"></div>
    </div>
  )
}
export default DashBoard;