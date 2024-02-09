import React ,{useState,useEffect} from 'react';
// import {History,useHistory} from 'react-router-dom';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';


function UpdateWorkingRequest(){
    const navigate =useNavigate();
    const { id }= useParams();
    const[user,setuser]= useState({});
  
    const handelinput=(e)=>
    {
        const n=e.target.name;
        const v=e.target.value;
        setuser({...user,[n]:v});
    }
    

   
    const loaduserdata= async ()=>{
        try{
           const userdata= await axios.get(`${"https://lms-server-sm9p.onrender.com"}/${id}`);
           setuser(userdata.data);
           console.log(user);
         }
         catch(err){
           console.log("error while calling getuserid");
         }
     }

     const updateuserdata= (e)=>{
        try{
             e.preventDefault();
             axios.post(`${"https://lms-server-sm9p.onrender.com"}/user/${id}`,user).then(res=>{
                navigate("/viewworkingrequest");
             }); 
          
         }
         catch(err){
           console.log("error whilw calling getuserid");
         }
     }
    useEffect(()=>{
        loaduserdata();
    },[]);
   
   
    return(
     
      <>
      {user.startdate}
      <section class="vh-100 bg-image"
  style={{height:100+"%",backgroundImage:"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div class="mask d-flex align-items-center h-auto gradient-custom-3">
    <div class="container h-auto" >
      <div class="row d-flex justify-content-center align-items-center " >
        <div class="col-6 col-md-0 col-lg-4 col-xl-6">
          <div class="card" style={{borderRadius: 15+"px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-0">Update Request</h2>

                
            <form method="POST" >
            <div class="form-group">  
                    <label for="exampleInputEmail2" class="para">Student Name</label>
                    <input type="text"  class="form-control form-control-sm hi"  id="exampleInputEmail1" autoComplete="off" value={user.studentname} onChange={handelinput} disabled required name="studentname"/>
                    <br/>
             </div>
                  <div class="form-group">      
                    <label for="exampleInputEmail2" class="para">Start Date</label>
                   <input type="text"  class="form-control form-control-sm hi"  id="exampleInputEmail1" autoComplete="off" value={user.startdate} onChange={handelinput} disabled required name="startdate"/>
                <br/>
                </div>
                <div class="form-group"> 
                <label for="exampleInputEmail2" class="para">End Date</label> 
                <input type="text"  class="form-control form-control-sm hi"  id="exampleInputEmail1" autoComplete="off" value={user.enddate} onChange={handelinput} disabled required name="enddate"/>
                <br/>
                </div>
                <div class="form-group"> 
                <label for="exampleInputEmail2" class="para">Purpose</label>         
                <input type="text" class="form-control form-control-sm  para hi"  id="exampleInputEmail1" autoComplete="off" value={user.purpose} onChange={handelinput} disabled required name="purpose"/>
                <br/>
                </div>
                <div class="form-group"> 
                <label for="exampleInputEmail2" class="para">StudentId</label>         
                <input type="text" class="form-control form-control-sm para  hi"   id="exampleInputEmail1" autoComplete="off" value={user.Studentid} onChange={handelinput} disabled required name="Studentid"/>
                <br/>
                </div>
                <div class="form-group"> 
                <label for="exampleInputEmail2" class="para">Status</label>         
                 <input type="text"   class="form-control form-control-sm hi "  id="exampleInputEmail1" autoComplete="off" value={user.wardenstatus} onChange={handelinput}  required name="wardenstatus"/>
                <br/>
                </div>
                <center>
                <div>
                   <button id="submit"  class="btn bttt gradient-custom-4" type="submit" onClick={updateuserdata}>Update</button>
               </div>
               </center>
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
export default UpdateWorkingRequest;