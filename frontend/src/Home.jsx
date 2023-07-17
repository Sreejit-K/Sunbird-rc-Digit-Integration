import { useState } from 'react'
import { endpoints } from './apiendpoint'
import { useNavigate } from 'react-router-dom' 
import axios from 'axios'
function Home() {
  //Stores the user input in var val    
  const [value , setValue] = useState() //useState is a hook
  const navigate = useNavigate() //Gives func to navigate
  async function formhandler(event)
  {
    event.preventDefault(); //Prevents default page refresh when we click submit
    try {
      //Axios is an API used for fetching/handling API requests
      const res = await axios.get(`${endpoints.verifyCertificate}${value}` , { //Calls the verify cert API endpoint
        headers : {
          Accept : "text/html" //Header to set what kind of return obj (PDF or HTML etc)
        }
      })
      if(res.status === 200){ //200 means sucessful
        navigate(`/certs/${value}` )
      }
    } catch {       //Incase errror is thrown from server
      window.alert("Invalid Id")
    }
    
  }

  return (
   <div className="container">
    {/* <h1>AGNIRVA BADGE VERIFICATION</h1> */}
    <form id="verificationForm" onSubmit={formhandler}>
        {/* This is because for every single keystroke, value var should update */}
      <input onChange={(e)=>{setValue(e.target.value)}} type="text" id="certificateId" placeholder="Enter Certificate ID" required/>
      <button type="submit">Verify</button>
    </form>
  </div>
  )
      
}

export default Home
