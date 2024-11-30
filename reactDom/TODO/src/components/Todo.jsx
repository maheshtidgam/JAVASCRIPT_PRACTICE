import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoDate } from "./TodoDate";
import "./Todo.css";
import { TodoList } from "./TodoList";

const todoKey="ReactTodo"
const getLOcalSTorageData=()=>{
    const rawTodos=localStorage.getItem(todoKey)
    if(!rawTodos) return [];
    console.log(rawTodos)
    return JSON.parse(rawTodos);
  }
export const Todo = () => {
  const [task, setTask] = useState(getLOcalSTorageData);
 

  const handleFormSubmit = (inputValue) => {
    // event.preventDefault();
    const{id,content,checked}=inputValue;

    if (!content) return;
   const ifTodoMatched=task.find((curtask)=>curtask.content===content)
   if(ifTodoMatched) return;
    setTask((prevTask) => [...prevTask, {id,content,checked}]);
    console.log(task)
  };

  const handleDeleteTodo = (value) => {
    // console.log(value)
    const updatedTask = task.filter((curtask) => curtask.content!== value);
    setTask(updatedTask);
  };

  //handle clear all data button
  const handleClearAll = () => {
    setTask([]);
  };


  const handleCheckedTodo=(content)=>{
    const updatedTask=task.map((curTask)=>{
        if(curTask.content===content){
            return{...curTask,checked:!curTask.checked}
        }else{
            return curTask; 
        }
    })

    setTask(updatedTask)

 }

//Add data to local storage
localStorage.setItem(todoKey, JSON.stringify(task))


  return (
    <section className="todo-container">
      <TodoDate />
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curtask,) => {
            return (
              <TodoList
                key={curtask.id}
                data={curtask.content}
                checked={curtask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section className="clear-btn" onClick={handleClearAll}>
        CLEAR ALL
      </section>
    </section>
  );
};
