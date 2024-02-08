import {Link,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import StudentApplyLeaveNavbar from './StudentApplyLeaveNavbar'
// import WorkingDayLeave from './WorkingDayLeave'
import '../../App.css';
// import StudentApplyLeave from './StudentApplyLeave'
// import AWDL from './AWDL';

function StudentHome(){
  
  const [data,setData]= useState({});
  let navigate=useNavigate();
  const callAboutPage= async ()=>{
      try{

          const res= await fetch('http://localhost:8000/ab' ,{
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
const response = await fetch('http://localhost:8000/abc', {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      credentials:"include"
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
  if(a=='Pending')
  {
    return(
      <>
      <p style={{color:"yellow"}}> Pending</p>
      </>
    )
  }

else if(a=='Approved')
  {
    return(
      <>
      <p style={{color:"green"}}>Approved</p>
      </>
    )
  }
  else{
    return(
      <>
      <p style={{color:"red"}}>Rejected</p>
      </>
    )
}
}
  return(
        <>
        <StudentApplyLeaveNavbar/>
    

      <div >

<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:70+'px',marginTop:20+'px'}}>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
    <Link to={`/remaining/${data.studentid}`} style={{textDecoration:"none"}}>
     <div class="card-body comcol" >
     <div ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Gb3HqOBrOIzCTAFoAouug9R1kwl2-C60aA&usqp=CAU" alt="BigCo Inc. logo" style={{width:90+"px", height:100+"px"}}/></div>
      <div style={{marginLeft:5+"px"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Remaining Leaves</b></h2></center>
      </div>
     {/* <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Remaining Leaves</b></h2></center> */}
      </div>
      </Link> 
    </div>
  </div>
  
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
    <Link to='/studentholidayleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
      <div ><img src="data:image/jpeg;base64,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" alt="BigCo Inc. logo" style={{width:90+"px", height:100+"px"}}/></div>
      <div style={{marginLeft:55+"px"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>View Holiday Leave</b></h2></center>
      </div>
      </div>
    </Link> 
    </div>
  </div>

  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
    <Link to='/studentworkingdayleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
    <div ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajcfYnWIXvFQ4kP81FePmreS_4mXCEpg2tA&usqp=CAU" alt="BigCo Inc. logo" style={{width:90+"px", height:100+"px"}}/></div>
      <div style={{marginLeft:45+"px"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>View workingday Leave</b></h2></center>
      </div>
      </div>
    </Link>
      
    </div>

  </div>
</div>


<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:70+'px'}}>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      
    <Link to='/studentapplywdleave' style={{textDecoration:"none"}}> 
    <div class="card-body comcol">
    <div ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL85uPUEIKwtr08_twLxeWNEIJh0LGoKzeLTpq7NOd4JqAf_kfsQRJ1mbTuNjFv25QPfE&usqp=CAU" alt="BigCo Inc. logo" style={{width:90+"px", height:100+"px"}}/></div>
      <div style={{marginLeft:40+"px"}}>
      <center><h3 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>Apply Workingday Leave</b></h3></center>
      </div>
      </div>
    </Link>
     
    </div>
  </div>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
    <Link to='/studentapplyleave' style={{textDecoration:"none"}}>
    <div class="card-body comcol">
    <div ><img src="https://www.shutterstock.com/image-vector/online-leave-request-vs-application-260nw-1824958268.jpg" alt="BigCo Inc. logo" style={{width:90+"px", height:100+"px"}}/></div>
      <div style={{marginLeft:45+"px"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431",textDecoration:"none"}}><b>Apply Holiday Leave</b></h2></center>
      </div>
      </div>
    </Link>
      
    </div>
  </div>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol" style={{pointerEvents:"none"}}>
      <div ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbvyQOMCBztGAxKKAC_AiYRgYDN6MzeZqGw&usqp=CAU" alt="BigCo Inc. logo" style={{width:90+"px", height:100+"px"}}/></div>
      <div style={{marginLeft:50+"px"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Calender</b></h2></center>
      </div>
      </div>
    </div>
  </div>
</div>


<div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:70+'px'}}>
  <div class="col sha hov">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      
     <div class="card-body comcol" style={{pointerEvents:"none"}}>
     <div ><img src="https://www.nkvidyabhavan.org/images/Rules/sports.jpg" alt="BigCo Inc. logo" style={{width:90+"px", height:100+"px"}}/></div>
      <div style={{marginLeft:55+"px"}}>
     <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Sports</b></h2></center>
      </div>
      </div>
     
    </div>
  </div>
  <div class="col sha hov ">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol" style={{pointerEvents:"none"}}>
        <div ><img src="data:image/jpeg;base64,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" alt="BigCo Inc. logo" style={{width:90+"px", height:100+"px"}}/></div>
      <div style={{marginLeft:50+"px"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Assignment</b></h2></center> </div>
      </div>
    </div>
  </div>
  <div class="col sha hov ">
    <div class="card h-100 comcol border" style={{border:'none'}}>
      <div class="card-body comcol" style={{pointerEvents:"none"}}>
        <div ><img src="data:image/jpeg;base64,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" alt="BigCo Inc. logo" style={{width:90+"px", height:100+"px"}}/></div>
      <div style={{marginLeft:10+"px"}}>
      <center><h2 class="card-title" style={{paddingTop:20+'px', paddingBottom:20+'px', color:" #0E2431"}}><b>Change Password</b></h2></center>
      </div>
      </div>
    </div>
  </div>
</div>
</div>

        </>
    )
}

export default StudentHome;