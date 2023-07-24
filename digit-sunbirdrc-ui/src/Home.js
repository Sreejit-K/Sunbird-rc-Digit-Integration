import { useState } from 'react'
import { endpoints } from './apiendpoint'
import { useNavigate } from 'react-router-dom' 
import { QrReader } from 'react-qr-reader';
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
      // const res = await axios.get(`${endpoints.verifyCertificate}${value}` , { //Calls the verify cert API endpoint
      //   headers : {
      //     "content-type": "application/json",
      //     Accept : "application/pdf" //Header to set what kind of return obj (PDF or HTML etc)
      //   }
      // })
      let reqBody = {
        "offset": 0,
        "limit": 1,
        "filters": {
          "contact": {
            "eq": value
          }
        }
      }
      const res = await axios.post(`${endpoints.verifyCertificate}search`, reqBody, 
      {
        headers : {
          "content-type": "application/json",
          "Accept" : "application/json" //Header to set what kind of return obj (PDF or HTML etc)
        }
      }
      )
      if(res.status === 200){ //200 means sucessful
        console.log("Res from search",res.data);
        navigate(`/certs/${res.data[0].osid}` )
      }
    } catch {       //Incase errror is thrown from server
      window.alert("Invalid Id")
    }
    
  }
  const [data, setData] = useState('No result');

  return (
   <div className="container">
    <h2>DIGIT Birth Certificates Verfication</h2>
    <form id="verificationForm" onSubmit={formhandler}>
        {/* This is because for every single keystroke, value var should update */}
      <input onChange={(e)=>{setValue(e.target.value)}} type="text" id="certificateId" placeholder="Enter Registration Number" required/>
      <button type="submit">Verify</button>
    </form>
  </div>
  )
      
}

export default Home
