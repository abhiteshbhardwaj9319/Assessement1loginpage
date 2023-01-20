import './App.css';
import { useState } from 'react';
//Create a Welcome component(greeting message) in Welcome.js👇.
import Welcome from './components/welcome';

function App() {
  const [name, setname] = useState("")
  const [status, setStatus] = useState(false)
  

  const handleOnChange = (event) => {
    setname(event.target.value)
  }

  const submit = (event) => {
    setStatus(!status) 
  }

  
  
  return (
    <>
      <div>
        <label >Name :</label>
        <input type='textarea' placeholder="Enter Your Name" value={name} onChange={handleOnChange} ></input>
      <br/>
        <button class='my-3' onClick={submit}>Submit</button>
        <br />
        {(status && name) && <Welcome name1={name} ></Welcome>}
        <h6>Assignment Done By-Shahid Ali with Reg. No-12105824</h6>
      </div>
    </>
  );
}

export default App;
