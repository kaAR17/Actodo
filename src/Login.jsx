import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Log=(props)=>{
    const navigate = useNavigate()
         
        const users=props.users
        const setusers=props.setusers
    
        const[eusername,setEusername]=useState()
        const[epassword,setEpassword]=useState()
        const[ruser,setRuser]=useState(true)
        function handleUInput(evt)
        {
          setEusername(evt.target.value)
        }
        function handlePInput(evt)
        {
            setEpassword(evt.target.value) 
        }
      
            function checkuser(){
                var userfound =false
                if(eusername==="ABC" && epassword==="123"){
                    console.log("Login success")
                    userfound=true
                    navigate('/App')
                }
                else{
                    console.log("Login failed")
                    
                    
                }
            }
        
    return(
        <div className= "bg-black p-10">
            <div className="bg-[#EFEFEF] p-16 border rounded-md ">
         
            <h1 className="text-3xl font-medium">Hey!Hi</h1>
              {ruser? <p>I help you manage your activities after you login :)</p> : <p className="text-red-600">Please Signup before you Login</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="Username"onChange={handleUInput}
                    className="w-48 border-black rounded-md "></input>
                    <input type="text" placeholder="Password"onChange={handlePInput}
                    className="w-48 border-black rounded-md "></input>
                    
                    <button className="bg-purple-700 w-24 p-1 rounded-md "onClick={checkuser}>Login</button>
                    <p>Didn't have an account? <Link to={"/Signup"} className="underline">Signup</Link> </p>

                </div> 
            </div>
            
        </div>
        
           
        
    )
}

export default Log;