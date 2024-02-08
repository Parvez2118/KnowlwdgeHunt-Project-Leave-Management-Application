// import React ,{useState} from 'react';
// // import {History,useHistory} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';

// function HodRegister()
// {
//     const navigate =useNavigate();
//     const [userRegistration, SetRegistration]= useState({
//         email:"",
//         password:""
        
//     });
//     const handelinput=(e)=>
//     {
//         const n=e.target.name;
//         const v=e.target.value;
//         SetRegistration({...userRegistration,[n]:v});
//     }

//     const PostData= async (e) => {
//         e.preventDefault();
        
//         const {email, password} =userRegistration;
//         const res1 = await fetch("/registerHod", {
//             method:"POST",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body :JSON.stringify({
//                email, password
//             })
 
//         });
//         console.log("Onclick");
//         const res= await res1.json();
//         if(res.status===422 || !res)
//         {
//             window.alert("Invalid Reg");
//         }
//         else
//         {
//             window.alert("valid Reg");
//             navigate("/Login");
//         }
//     }

//     return(
//         <div className="body">
//             <div className="d1">
//                <center><h1> REGISTER HERE</h1></center>
//             </div>
//         <div className="Rmaindiv">
   

//                 <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
//         <form method='POST'>
            
//                 <label className="c3">Email</label>
//                 <br/>
              
//                 <input type="email" className="c1" autoComplete="off" value={userRegistration.email} onChange={handelinput} required name="email"/>
//                 <br/>
//                 <br/>

//                 <label className="c3">Password</label>         
//                 <br/> 
//                 <input type="password"  className="c1" autoComplete="off" value={userRegistration.password} onChange={handelinput} required name="password"/>
//                 <br/>
//                 <br/>
//             <div>
//                <button type="submit" id="submit" onClick={PostData}>Submit</button>
//            </div>
//         </form>
//         </div>
       
//             </div>
// )
// }
// export default HodRegister;

import React ,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "../../App.css";
function HodRegister(){
      
    // const [userLogin, SetLogin]= useState({
    //     email:"",
    //     password:""
        
    // });
    const navigate =useNavigate();
    const [email , Setemail]= useState('');
    const [password , SetPassword]= useState('');
    

    const PostData= async (e) => {
        e.preventDefault();
        
        const res = await fetch("http://localhost:8000/LoginHod", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify({
               email, password
            })
 
        });
    
        const data= await res.json();
        console.log(data);
        if(res.status===400|| res.status===422 || !data)
        {
            window.alert("Login failed");
        }
        else
        {
          window.alert("Logged In Sucessfully");
          navigate("/Hod");
        }
    }
    return(
        <>
     

<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form method='POST'>
<div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mt-4 me-3"style={{margin:"0px"}}>Sign in with</p>
            <button type="button" class="btn btn-light btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-light btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>
<button type="button" class="btn btn-light btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
</div>
<div class="form-group">  
                    <label for="exampleInputEmail1" class="para"> Enter Email address </label>  
                    <input type="email" class="form-control form-control-sm hi"  id="exampleInputEmail1" autoComplete="off" aria-describedby="emailHelp" value={email} onChange={(e)=>Setemail(e.target.value)} required name="email" />  
          </div> 
                <br/>
<div class="form-group">  
                    <label for="exampleInputPassword1" class="para">Enter Password </label>  
                    <input type="password" class="form-control form-control-sm hi" id="exampleInputPassword1" autoComplete="off" value={password} onChange={(e)=>SetPassword(e.target.value)} required name="password" />  
          </div>  
                <br/>
<div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
</div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn-light btn-outline-secondary btn-block btt" onClick={PostData}> Sign in </button>
</form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-light  ">
<div class="text-muted mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
   
    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
<a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
<a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    
  </div>
 
</section>
    </>
    )
}
export default HodRegister;