import { useState } from "react";
import { Link, Navigate } from "react-router-dom"; 
const Sign=(props)=>{
    const users=props.users
    const setusers=props.setusers

    const[eusername,setEusername]=useState()
    const[epassword,setEpassword]=useState()
    function handleUInput(evt)
    {
      setEusername(evt.target.value)
    }
    function handlePInput(evt)
    {
        setEpassword(evt.target.value) 
    }
    function addUser(){
        setusers([...users,{username:eusername,password:epassword}])
        Navigate('/')
    }
 
    return(
        <div className= "bg-black p-10">
            <div className="bg-[#EFEFEF] p-16 border rounded-md ">
                <h1 className="text-3xl font-medium">Hey!Hi</h1>
                <p >Sign-Up here</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="Username" onChange={handleUInput}
                    className="w-48 border-black rounded-md "></input>
                    <input type="text" placeholder="Password" onChange={handlePInput}
                    className="w-48 border-black rounded-md "></input>
                    <input type="text" placeholder="Confirm password" onChange={handlePInput}
                    className="w-48 border-black rounded-md "></input>
                    <button className="bg-orange-400 w-24 p-1 rounded-md " onClick={addUser}>SignUp</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link> </p>

                </div>
            </div>
            
        </div>
    )
}
export default Sign;