import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
     axios.get("https://api.adviceslip.com/advice")
       .then((response) => {
         const { advice } = response.data.slip;
         setAdvice(advice)
       }).catch((error) => {
       console.log(error);
     })
  }

  useEffect(() => {
    fetchAdvice()
  }, [])
  
  return (
   
      <div className='app'>
        <div className='card'>
           <h2 className='heading'>{advice}</h2>
          <button className='button' onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
  );
}

export default App;
