import React, {useState} from "react";

function ToDoList(){

    const [tasks,setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleNewTask(event){
        setNewTask(event.target.value)
    }
    function handleAddTask(){

        if(newTask.trim() !== ""){

        setTasks(t=> [...t,newTask]);
        setNewTask("");

        }
        else{
            alert("Please Enter Any Task In The Input Box First");
        }
    }
    function deletetask(index){
        
        let confirmation = confirm(`Do You want to delete This task ?`);

        if(confirmation){

        const updatedTasks = tasks.filter((_,i)=> i !== index );
        setTasks(updatedTasks);

        }
        }
    function moveTaskUp(index){
            
        const updatedTasks = [...tasks];
            if(index > 0){
                [updatedTasks[index],updatedTasks[index -1]] = 
                [updatedTasks[index - 1], updatedTasks[index]];
            }
        setTasks(updatedTasks);
        }
    function moveTaskDown(index){
            
        const updatedTasks = [...tasks];
            if(index < tasks.length - 1){
                [updatedTasks[index],updatedTasks[index + 1]] = 
                [updatedTasks[index + 1], updatedTasks[index]];
            }
        setTasks(updatedTasks);
        }
  return(
    <>
      <h1> To Do List </h1>
      <div className="todolist">
        <div className="input-section">
          <input type="text"
                 placeholder="Enter Your Task Here...."
                 value={newTask} 
                 onChange={handleNewTask}
          />
          <button onClick={handleAddTask}>Add Task </button>
        </div>
        <div className="task-display">
            <ol>
                {tasks.map((task,index)=>
                <li key={index}><span className="text">{task}</span>
                <button className="moveUpBtn" onClick={() => moveTaskUp(index)}>
                    🔼
                </button>
                <button className="moveDownBtn" onClick={() => moveTaskDown(index)}>
                    🔽
                </button>
                <button className="delete-button" onClick={()=> deletetask(index)}>
                    🗑️
                </button>
                </li>
                )}                          
            </ol>
        </div>
      </div>
    </>
  )
}

export default ToDoList