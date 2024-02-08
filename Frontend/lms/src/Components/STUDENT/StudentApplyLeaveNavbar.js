// import StudentApplyLeave from './StudentApplyLeave'
import '../../App.css';
import { Link } from 'react-router-dom';


function StudentApplyLeaveNavbar(){
    return(
        <>
   <nav class="navbar navbar-expand-lg navbar-light navcol ">
  <div class="container-fluid">
  <a class="navbar-brand" href="#" style={{color:"#0E2431"}}><img height="40px" style={{borderRadius:"50px"}}src="logo2.png"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">

        <li class="nav-item adj hhh">
          <Link to='/studenthome' style={{textDecoration:"none", color:"#0E2431",fontFamily: 'Cabin'}}>Home</Link>
        </li>


        <li class="nav-item adj hhh">
        <Link  to="/"style={{textDecoration:"none", color:"#0E2431",fontFamily: 'Cabin'}}>Logout</Link>
        </li>

      
        
      
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}

export default StudentApplyLeaveNavbar;