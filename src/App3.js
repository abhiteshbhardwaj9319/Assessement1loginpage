import './App.css';
import { useState } from 'react';
//Create a Welcome component(greeting message) in Welcome.js👇.
import Welcome from './components/welcome3';

function App() {
  const [name, setname] = useState("")
  const [regno, setregno] = useState("")
  const [status, setStatus] = useState(false)
  const [btnstate, setbtnstate] = useState("Enable Dark Mode")

  const handleOnChange = (event) => {
    setname(event.target.value)
  }
  const handleOnChange2 = (event) => {
    setregno(event.target.value)
  }
  const submit = (event) => {
    setStatus(!status) 
  }
  const [style1, newstyle] = useState({
    color: 'black',
    backgroundColor: 'white'

  })
  const toggleStyle = () => {
    if (style1.color === 'white') {
      newstyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setbtnstate("Enable Dark Mode")
    }
    if (style1.color === 'black') {
      newstyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setbtnstate("Enable Light Mode")

    }
  }
  return (
    <>
      <div style={style1}>
        <label >Name :</label>
        <input type='textarea' placeholder="Enter Your Name" value={name} onChange={handleOnChange} ></input>
        <label>&nbsp;Registration Number </label>
        <input type='textarea' placeholder="Your Registration Number" value={regno} onChange={handleOnChange2} ></input>
      <br/>
        <button class='my-3' onClick={submit}>Submit</button>
        <br />
        {(status && name && regno) && <Welcome name1={name} regno1={regno}></Welcome>}
{/* 
        <h6>Assignment Done By-Abhitesh Bhardwaj with Reg. No-12018557</h6> */}
        <br />
        <br />
        <div className="button-container">
          <button className='btn btn-info mx-1' onClick={toggleStyle}>{btnstate}</button>
        </div>
      </div>
    </>
  );
}

export default App;
