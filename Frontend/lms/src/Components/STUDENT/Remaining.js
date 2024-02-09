import { useEffect ,useState} from "react";
import{Link,useParams} from 'react-router-dom';
import StudentApplyLeaveNavbar from "./StudentApplyLeaveNavbar";
function Remaining(){
  const [users, setUsers] = useState(0);
  const [users1, setUsers1] = useState(0);
  const { id }= useParams();
 
  async function login(){

    const response = await fetch(`${"https://lms-server-sm9p.onrender.com/wcount"}/${id}`, {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      credentials:"include"
    });
    const data = await response.json();
    setUsers(data);
   
    console.log(data);
    // return data;
  }

  async function login1(){

    const response = await fetch(`${"https://lms-server-sm9p.onrender.com/hcount"}/${id}`, {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      credentials:"include"
    });
    const data = await response.json();
    setUsers1(data);
    console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
    console.log(data);
    // return data;
  }
useEffect(()=>{
   login();
   login1();
},[]);

const [hl, sethl] = useState(20);
  const [wd, setwd] = useState(20);

   return(
    <>
    <StudentApplyLeaveNavbar/>
    <div class="card"style={{boxShadow:"none",marginTop:10+"px", border:"none",backgroundColor:"rgb(245, 245, 245)" }}>
        <center>
  <div class="card-header">
    <h1>Remaining Leaves</h1>
  </div>
  </center>
<div style={{marginTop:10+"px",marginBottom:50+"px", marginLeft:100+"px",marginRight:100+"px",backgroundColor:"rgb(245, 245, 245)"}}>
  <div class="row" >
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card hov" >
      <div class="card-body" style={{backgroundColor:"rgb(222, 238, 252)"}}>
        <h2 class="card-title">Holiday Leave</h2>
        <h5>Total :{hl}</h5>
        <h5>Remaining :{hl-users1}</h5>
    
        <Link to="/studenthome" class="btn btn-outline-info">Back</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card hov" style={{color:"#0E2431",backgroundColor:"rgb(222, 238, 252)"}}>
     <div style={{display:"flex",color:"#0E2431",backgroundColor:"rgb(222, 238, 252)"}}>
      <div class="card-body" style={{color:"#0E2431",backgroundColor:"rgb(222, 238, 252)"}}>
        <h2 class="card-title">Working Day Leave</h2>
        <h5>Total :{wd}</h5>
        <h5>Remaining :{wd-users}</h5>
        <Link to="/studenthome" class="btn btn-outline-info">Back</Link>
        </div>
      
      </div>
    
    </div>
  </div>
</div>
</div>
</div>
<div style={{marginTop:230+'px',fontSize:10+'px'}}>
<div class="card-body" >
    <blockquote class="blockquote mb-0">
      <p style={{paddingTop:13+'px',fontSize:15+'px',textAlign:'center',opacity:0.5}}>@All Copy Right Reserve  LMS</p>
      <footer ></footer>
    </blockquote>
  </div>
</div>

    
    </>
   )
}

export default Remaining;