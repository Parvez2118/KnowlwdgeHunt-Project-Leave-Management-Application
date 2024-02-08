// import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import "../App.css";

function Home(){
    return(
        <div style={{backgroundColor:"whitesmoke"}}>
       
        <center>
  <div class="card" style={{backgroundColor:" rgb(222, 238, 252)"}}>
  <div class="card-body">
<img height="60px" style={{borderRadius:"50px"}}src="logo2.png"></img>
   <h1 style={{color:"#296B7B"}}>Leave Management System</h1> 
  </div>
</div>
</center>
<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:10+"px",marginTop:100+"px",backgroundColor:"rgb(245, 245, 245)"}} >
  <div class="col hov" >
    <div class="card h-100">
      <img src="https://independencebaptist.com/wp-content/uploads/2020/06/typing-1024x512.jpg" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body" >
        <h5 class="card-title"><b>Hod Portal</b></h5>
       
        <Link to="/Hodregister" style={{backgroundColor:"rgb(222, 238, 252)",color:"#0E2431"}} class="btn btn-primary hov"><b>Login as HOD</b></Link>
 
      </div>
    </div>
  </div>
  <div class="col hov" >
    <div class="card h-100" >
      <img src="https://independencebaptist.com/wp-content/uploads/2020/06/typing-1024x512.jpg" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title"><b>Warden Portal</b></h5>
        <Link to="/wardenregister" style={{backgroundColor:"rgb(222, 238, 252)",color:"#0E2431"}} class="btn btn-primary hov"><b>Login as Warden</b></Link>
      </div>
    </div>
  </div>
  <div class="col hov">
    <div class="card h-100 ">
      <img src="https://independencebaptist.com/wp-content/uploads/2020/06/typing-1024x512.jpg" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title"><b>Student Portal</b></h5>
        <Link to="Login" style={{backgroundColor:"rgb(222, 238, 252)",color:"#0E2431"}} class="btn btn-primary hov"><b>Login as Student</b></Link>
      </div>
      
    </div>
  </div>
</div>
        </div>
    )
}

export default Home;