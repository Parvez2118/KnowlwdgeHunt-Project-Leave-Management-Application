import React ,{useEffect, useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import '../../App.css';
function Addstudent(){
    const Navigate= useNavigate();
    const [userRegistration, SetRegistration]= useState({
      username:"",
      email:"",
      MobileNumber:"",
      Department:"",
      Parentscontact:"",
      studentid:"",
      password:""
      
  });
  const handelinput=(e)=>
  {
      const n=e.target.name;
      const v=e.target.value;
      SetRegistration({...userRegistration,[n]:v});
  }
  
  const PostData= async (e) => {
    e.preventDefault();
    
    const { username,email,MobileNumber,Department,Parentscontact,studentid,password} =userRegistration;
    const res1 = await fetch("https://lms-server-sm9p.onrender.com/addstudent", {
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body :JSON.stringify({
          username,email,MobileNumber,Department,Parentscontact,studentid,password
        })
  
    });
    console.log("Onclick");
    const res= await res1.json();
    if(res.status!=200 || !res)
    {
        window.alert("Student Added");
        Navigate('/viewallstudent');
    }
    else
    {
        window.alert("Invalid Reg");
      
    }
  }
    return(
        <>
        
      <section class="vh-100 bg-image"
  style={{height:100+"%",backgroundImage:"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div class="mask d-flex align-items-center h-auto gradient-custom-3">
    <div class="container h-auto" >
      <div class="row d-flex justify-content-center align-items-center " >
        <div class="col-6 col-md-0 col-lg-4 col-xl-6">
          <div class="card" style={{borderRadius: 15+"px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-0">Add a Student</h2>

              <form method='POST'>
              <div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Student Name </label>  
                    <input type="=text" class="form-control form-control-sm hi"  id="exampleInputEmail1"  value={userRegistration.username} onChange={handelinput}autoComplete="off" aria-describedby="emailHelp"  required name="username" />  
          </div> 
                <br/>
             <div class="form-group">  
                    <label for="exampleInputPassword1" class="para">Student Email </label>  
                    <input type="email" class="form-control form-control-sm hi" id="exampleInputPassword1" value={userRegistration.email} onChange={handelinput}autoComplete="off"  required name="email" />  
          </div>  
                <br/>
                
                <div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Mobile Number </label>  
                    <input type="Number" class="form-control form-control-sm hi"  id="exampleInputEmail1" value={userRegistration.MobileNumber} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp"  required name="MobileNumber" />  
          </div> 
                <br/>
<div class="form-group">  
                    <label for="exampleInputPassword1" class="para">Parent's Contact </label>  
                    <input type="Number" class="form-control form-control-sm hi" id="exampleInputPassword1" value={userRegistration.Parentscontact} onChange={handelinput} autoComplete="off"  required name="Parentscontact" />  
          </div>  
                <br/>
                <div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Department</label>  
                    <input type="text" class="form-control form-control-sm hi"  id="exampleInputEmail1"  value={userRegistration.Department} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp"  required name="Department" />  
          </div> 
                <br/>
                <div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Student Id</label>  
                    <input type="text" class="form-control form-control-sm hi"  id="exampleInputEmail1"  value={userRegistration.studentid} onChange={handelinput} autoComplete="off" aria-describedby="emailHelp"  required name="studentid" />  
          </div> 
                <br/>
<div class="form-group">  
                    <label for="exampleInputPassword1" class="para">Password </label>  
                    <input type="password" class="form-control form-control-sm hi" id="exampleInputPassword1"  value={userRegistration.password} onChange={handelinput} autoComplete="off"  required name="password" />  
          </div>  
                <br/>

    
                <center> <button type="submit" class="btn bttt gradient-custom-4" onClick={PostData}> Enter </button> </center>


              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
export default Addstudent;