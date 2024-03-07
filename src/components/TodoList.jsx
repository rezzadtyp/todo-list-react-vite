import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [text, setText] = useState("");

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    console.log("Addingtask", newTask);
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    )
  }

  function handleKeyUp(e) {
    if (e.key === "Enter") {
      addTask(text);
    }
  }

  return (
    <div className="grid gap-10 w-full">
      <div>
        <h1 className="text-center font-bold text-3xl">TODO LIST</h1>
      </div>
      <div className="flex justify-between gap-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={handleKeyUp}
          className="input input-bordered input-primary w-full"
          placeholder="🖊️ Add item..."
        />
        <button className="btn btn-outline btn-primary w-20" onClick={() => addTask(text)}>
          Add
        </button>
      </div>
      <div>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </div>
  );
}
export default TodoList;
