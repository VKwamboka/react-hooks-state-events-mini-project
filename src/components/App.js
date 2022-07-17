import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


console.log("Here");
// console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");


  function deleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const visibleTasks = tasks.filter((task) => category === "All" || task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} 
      onSelectCategory={setCategory}/>
      
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")} 
        onTaskFormSubmit={addTask}/>
        <TaskList onDeleteTask={deleteTask} tasks={visibleTasks} />
      </div>
    </div>
  );

}
export default App;
