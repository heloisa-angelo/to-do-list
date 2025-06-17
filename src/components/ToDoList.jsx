import { useState } from "react";
import './index.css'
import { SlArrowDownCircle } from "react-icons/sl";
import { SlArrowUpCircle } from "react-icons/sl";
import { SlCheck } from "react-icons/sl";

export default function ToDoList(){
    const [tasks, setTasks] = useState(['comer café da manhã', 'tomar banho', 'passear com o cachorro'])
    const [newTask, setNewTask] = useState('')

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
        setTasks( t => [...tasks, newTask]);
        setNewTask("")
        }
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaksUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

     function moveTaksDown(index){
          if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    return(
        <div className="to-do-list">

            <h1>To Do List</h1>

            <div>
                <input type="text" placeholder="Digite uma tarefa..." value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Adicionar</button>
            </div>

            <ol>
                {tasks.map((task, index) => <li key={index}> <span className="text">{task}</span>  
                <button className="delete-button" onClick={() => deleteTask(index)}><SlCheck /></button>
                

                 <button className="delete-button" onClick={() => moveTaksUp(index)}><SlArrowUpCircle /></button>


                <button className="delete-button" onClick={() => moveTaksDown(index)}><SlArrowDownCircle />
</button>


                </li>)}
            </ol>


        </div>
    )
}