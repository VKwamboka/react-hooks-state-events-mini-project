import React, {useState} from "react";


function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
      Details
      <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
      </label>
      <label>
      Category
      <select value={category} onChange={(event) => setCategory(event.target.value)}>
      {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


