import { useEffect ,useState} from "react";
import {Link} from 'react-router-dom';
import '../../App.css';

import {useNavigate} from 'react-router-dom';
import StudentApplyLeaveNavbar from './StudentApplyLeaveNavbar'
function Studentviewholidayleave(){
  const [data,setData]= useState({});
  let navigate=useNavigate();
  const callAboutPage= async ()=>{
      try{

          const res= await fetch('/ab' ,{
              method:"GET",
              headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
              },
              credentials:"include"
});
          const data1= await res.json();
          console.log(data1);
          setData(data1);
          if(!res.status===200){
              const error= new Error(res.error);
              throw error;
          }
      }
catch(err){
          console.log(err);
          navigate('/Login');
      }
  }
  const [users, setUsers] = useState([]);

  async function login(){
const response = await fetch('/xyz', {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
     
    });
const actualdata = await response.json();
    setUsers(actualdata.data);
    console.log(actualdata.data);
    // return data;
  }
useEffect(()=>{
  callAboutPage();
  login();
},[]);
  const color=(a)=>{
    if(a=='pending')
    {
      return(
        <>
        <p  class="badge badge-primary rounded-pill d-inline" style={{color:"#FFA351"}}> Pending</p>
        </>
      )
    }
  
  else if(a=='approved')
    {
      return(
        <>
        <p class="badge badge-success rounded-pill d-inline"  style={{color:"green"}}>Approved</p>
        </>
      )
    }
    else{
      return(
        <>
        <p  class="badge badge-warning rounded-pill d-inline" style={{color:"red"}}>Rejected</p>
        </>
      )
  }
  }
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
        <Link to="/" style={{textDecoration:"none", color:"#0E2431",fontFamily: 'Cabin'}}>Logout</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>

   <center>
   <div class="card-body" style={{marginTop:20+"px"}}>
   <h1 style={{color:"#0E2431",fontFamily: 'Cabin'}} >Holiday leaves</h1> 
  </div>
  </center>
<table  class="table" style={{backgroundColor:"rgb(245, 245, 245)",fontFamily: 'Cabin'}}>
  <thead style={{backgroundColor:" rgb(222, 238, 252)"}}>
    <tr>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px",fontFamily: 'Cabin'}}>Student Name</th>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px",fontFamily: 'Cabin'}}>Start Date</th>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px",fontFamily: 'Cabin'}}>End Date</th>
      <th scope="col"style={{color:"#0E2431",fontSize:17+"px",fontFamily: 'Cabin'}}>Type of Leave</th>
      <th scope="col" style={{color:"#0E2431",fontSize:17+"px",fontFamily: 'Cabin'}}>Warden's Status</th>
      {/* <th scope="col" style={{color:"#0E2431",fontSize:17+"px"}}> HOD's Status</th> */}
      
    </tr>
  </thead>
  <tbody>
{users.map(a=>{
          return(
         
          data.studentid==a.Studentid&&
             <tr>
                <td style={{color:"#6883BC",fontFamily:"'Poppins',sans-serif",fontSize:14+"px"}}>{a.studentname}</td>
                <td style={{color:"#6883BC",fontFamily:"'Poppins',sans-serif",fontSize:14+"px"}}>{a.startdate}</td>
                <td style={{color:"#6883BC",fontFamily:"'Poppins',sans-serif",fontSize:14+"px"}}>{a.enddate}</td>
                <td style={{color:"#6883BC",fontFamily:"'Poppins',sans-serif",fontSize:14+"px"}}>{a.purpose}</td>
                <td style={{color:"#6883BC",fontFamily:"'Poppins',sans-serif",fontSize:14+"px"}}>{color(a.wardenstatus)}</td>
                {/* <td style={{color:"#6883BC",fontFamily:"'Poppins',sans-serif",fontSize:14+"px"}}>{color(a.hodstatus)}</td> */}
              </tr>
            
 )  })}
</tbody>

</table>

</>
    )
}
export default Studentviewholidayleave;