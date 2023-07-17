import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certificate from './Certificate'; //For the certificate page
import Home from './Home' //For the home page
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          {/* Default Route /  */}
          <Route index element={<Home/>} />
          {/* / certificate/{id}  */}
          <Route path='/certs/:id' element={<Certificate/>} /> {/* : is used to tell its a var. :id is a variable. Must be same as the one in Certificate.jsx */}
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
