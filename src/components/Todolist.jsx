import { useState } from "react"

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
    }
    const delteTask=(id)=>{
        setTasks=(tasks.filter(task=task.id != id))
    }
  }    
}
export default Todolist