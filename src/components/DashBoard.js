import React from 'react'

const DashBoard = () => {
  const [body, setBody] = React.useState('')
  const [num, setNumber] = React.useState(0)
  const [err, setErr] = React.useState(null)
  const SendMessage = (event) => {
    event.preventDefault()
    if (num === '' || body === '') {
      setErr('Message or Number Can\'t be embty')
    }
    else { fetch() }
  }
  return (
    <div className="row">
      <div className="col-12 m-3 p-4 quick-sender">
        <h4 className="mb-3 text-center">Fast send</h4>
        <div className="px-sm-2 px-md-4">
          <div className={err == null ? "d-none" : "alert alert-danger "} role="alert">
            {err}
          </div>
        </div>
        <form>
          <div className="input-group px-sm-2 px-md-4 my-2 pinned">
            <textarea
              className="form-control my-2 mr-2 py-2 input"
              onChange={(val) => setBody(val)}
              placeholder='Write down message to send'></textarea>
            <input
              onChange={(val) => setNumber(val)}
              className="form-control my-2  py-4 input"
              type="tel" placeholder="Phone number" />
            <button
              onClick={SendMessage}
              className="send-button py-sm-3 py-md-3">Send</button>
          </div>
        </form>
      </div>
      <div className="col-6">data</div>
      <div className="col-6">state</div>
    </div>
  )
}
export default DashBoard;