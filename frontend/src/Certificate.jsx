import { useEffect, useRef } from 'react'
import { endpoints } from './apiendpoint'
import {useParams} from 'react-router-dom'

import axios from 'axios'
function Certificate() {
const ref=useRef() //Hook that returns a ref to a HTML obj/dom element 
const { id } = useParams(); //Hook to get the ID valu/param. ID should be the 
  useEffect(()=> { //Hook used to run a func. This runs at the start of the page & if any dependency var vals change
    axios.get(`${endpoints.verifyCertificate}${id}` , { //Fetches the same API as last time
        headers : {
          Accept : "text/html"
        }
      }).then((res)=> { //Passes the API result to res var
        if(res.status==200){ //If sucess, sets inner HTML to returned HTML code
            ref.current.innerHTML = res.data
        }else { //Throws a error message if invalid
            ref.current.innerHTML = "Invalid Certificate"
        }
      })
  })

  return (
  //Container for the HTML certificate returned by the API  
  <div className="container">
      <h2>
        Valid Certificate
      </h2>
    <div ref={ref} className="container2"> 
    
    </div>
  </div>

  )
      
}

export default Certificate
