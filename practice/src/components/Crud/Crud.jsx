import React, { useState } from "react";
import "./Crud.css";

const Crud = () => {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handlechange = (event) => {
    setNewTask(event.target.value);
  };

  const addtask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskname: newTask,
      completed: false,
    };

    const newToDoList = [...todoList, task];
    setTodoList(newToDoList);
    setNewTask("");
  };

  const deletetask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completetask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <div className="addtask">
        <input onChange={handlechange} value={newTask} />
        <button onClick={addtask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div
              className="task_container"
              style={{ backgroundColor: task.completed ? "green" : "white" }}
            >
              <h1>{task.taskname}</h1>
              <button onClick={() => deletetask(task.id)}>delete task</button>
              <button onClick={() => completetask(task.id)}>complete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crud;
