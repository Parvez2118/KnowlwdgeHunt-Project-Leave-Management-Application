import React from 'react'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import HodRegister from './Components/HOD/HodRegister';
import WardenRegister from './Components/WARDEN/WardenRegister';
import Login from './Components/STUDENT/Login';
import ViewAllStudent from './Components/WARDEN/ViewAllStudent';
import ViewAllRequest from './Components/WARDEN/ViewAllRequest';
import ViewWorkingRequest from './Components/WARDEN/ViewWorkingRequest';
import Addstudent from './Components/WARDEN/Addstudent';
import Hodhome from './Components/HOD/Hodhome';
import ViewAllStudentHod from './Components/HOD/ViewAllStudentHod';
import StudentHome from './Components/STUDENT/StudentHome';
import StudentApplyWDLeave from './Components/STUDENT/StudentApplyWDLeave';
import StudentApplyLeave from './Components/STUDENT/StudentApplyLeave';
import Studentviewholidayleave from './Components/STUDENT/Studentviewholidayleave';
import Studentviewworkingleave from './Components/STUDENT/Studentviewworkingleave';
import UpdateRequest from './Components/WARDEN/UpdateRequest';
import UpdateWorkingRequest from './Components/WARDEN/UpdateWorkingRequest';
import UpdateHodrequest from './Components/HOD/UpdateHodrequest';
import Remaining from './Components/STUDENT/Remaining';

const App = () => {
 
 
  return (
    <>

    <BrowserRouter>
      <Routes>
     
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/Hodregister' element={<HodRegister/>}></Route> 
        <Route path='/wardenregister' element={<WardenRegister/>}></Route> 
        <Route path='/Login' element={<Login/>}></Route> 
        <Route exact path='/viewallstudent' element={<ViewAllStudent/>}></Route>
        <Route path='/viewallrequest' element={<ViewAllRequest/>}></Route> 
        <Route exact path='/viewworkingrequest' element={<ViewWorkingRequest/>}></Route>
        <Route exact path='/addstudent' element={<Addstudent/>}></Route>
        <Route path='/Hod' element={<Hodhome/>}></Route> 
        <Route exact path='/viewallstudenthod' element={<ViewAllStudentHod/>}></Route>
        <Route exact path='/studenthome' element={<StudentHome/>}></Route>
        <Route exact path='/studentapplywdleave' element={<StudentApplyWDLeave/>}></Route>
        <Route exact path='/studentapplyleave' element={<StudentApplyLeave/>}></Route> 
        <Route exact path='/studentholidayleave' element={<Studentviewholidayleave/>}></Route>
        <Route exact path='/studentworkingdayleave' element={<Studentviewworkingleave/>}></Route>
        <Route path='/userr/:id' element={<UpdateRequest/>}></Route> 
        <Route path='/userrr/:id' element={<UpdateWorkingRequest/>}></Route> 
        <Route path='/user/:id' element={<UpdateHodrequest/>}></Route> 
        <Route exact path='/remaining/:id' element={<Remaining/>}></Route>

      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App