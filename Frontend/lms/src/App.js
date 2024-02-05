import React from 'react'
// import axios from 'axios'

// import Login from './Component/Login';
// import Home from './Project/Home';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
// import Admin from './Project/Admin';
// import WardenRegister from './Project/WardenRegister';


// import HodRegister from './Project/HodRegister';
// import UpdateRequest from './Project/AdminData/UpdateRequest';
// import ViewAllStudent from './Project/AdminData/ViewAllStudent';
// import Addstudent from './Project/AdminData/Addstudent';
// import StudentHome from './Project/StudentHome';
// import StudentApplyWDLeave from './Project/StudentApplyWDLeave';
// import StudentApplyLeave from './Project/StudentApplyLeave';
// import Studentviewholidayleave from './Project/Studentviewholidayleave';
// import Studentviewworkingleave from './Project/Studentviewworkingdayleave';
// import Hod from './Project/Hod';
// import HodviewAllStudent from './Project/AdminData/HodviewAllStudent';
// import UpdateHodrequest from './Project/AdminData/UpdateHodrequest';
// import Workingrequest from './Project/Workingrequest';
// import UpdateWorkingRequest from './Project/AdminData/UpdateWorkingRequest';
import Home from './Components/Home';
import HodRegister from './Components/HOD/HodRegister';
import WardenRegister from './Components/WARDEN/WardenRegister';
import Login from './Components/STUDENT/Login';


const App = () => {
 
 
  return (
    <>

    <BrowserRouter>
      <Routes>
     
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/Hodregister' element={<HodRegister/>}></Route> 
        <Route path='/wardenregister' element={<WardenRegister/>}></Route> 
        <Route path='/Login' element={<Login/>}></Route> 
        {/* <Route exact path='/viewallstudent' element={<ViewAllStudent/>}></Route>
        <Route exact path='/viewworkingrequest' element={<Workingrequest/>}></Route>
        <Route exact path='/viewallstudenthod' element={<HodviewAllStudent/>}></Route>
       
       
        <Route path='/userr/:id' element={<UpdateRequest/>}></Route> 
        <Route path='/userrr/:id' element={<UpdateWorkingRequest/>}></Route> 
        <Route path='/user/:id' element={<UpdateHodrequest/>}></Route> 
        
        <Route path='/Hod' element={<Hod/>}></Route> 
        <Route path='/viewallrequest' element={<Admin/>}></Route> 
        <Route exact path='/addstudent' element={<Addstudent/>}></Route>
        <Route exact path='/studentapplywdleave' element={<StudentApplyWDLeave/>}></Route>
        <Route exact path='/studenthome' element={<StudentHome/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/studentholidayleave' element={<Studentviewholidayleave/>}></Route>
        <Route exact path='/studentworkingdayleave' element={<Studentviewworkingleave/>}></Route>
        <Route exact path='/studentapplyleave' element={<StudentApplyLeave/>}></Route> */}
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App