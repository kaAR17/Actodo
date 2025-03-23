import { useState } from "react"
import { FaTrash } from 'react-icons/fa';


const Todolist=()=>{
    const[tasks,setTasks]=useState([])
    const [task,setTask]=useState("")
  const addTask=()=>{
    if(task.trim() !==''){
        setTasks([
            ...tasks,
            {id:Date.now(),text:task}
        ])
        setTask('')
    }}
    const handlechange=(evt)=>{
        setTask(evt.target.value)
    }
    const deleteTask=(id)=>{
        setTasks(tasks.filter(task=>task.id !== id))
    }
    

return(
        <div className="flex gap-10 flex-wrap " >
            <div className="flex flex-col gap-3" >
            <h1 className=" text-2xl font-medium">Manage Activities</h1>
            <div>
            <input className="border border-black bg-transparent rounded-md" placeholder="Text Activity" type='text' value={task} onChange={handlechange}></input>
            <button  className="bg-black p-1 text-white border rounded-md "onClick={addTask}> Add</button>
            </div>
            </div>
            <div className="bg-purple-600  flex-grow p-2">
                <h1  className="font-bold text-2xl ">Today's Activities</h1>
                {tasks.length===0?<p>You didn't add anything yet</p>:""}
                <ol>
                    
                {tasks.map((task,index) => (
                    <li key={task.id} className="flex justify-between ">
                        <span>{index+1}.{task.text}</span>
                        <span>
                        <FaTrash onClick={()=>deleteTask(task.id)} className="text-red-600"/></span>
                    </li>
                ))}
                </ol>
            </div>
        </div>
    )

};
export default Todolist