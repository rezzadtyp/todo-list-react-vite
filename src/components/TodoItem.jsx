const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="flex place-items-center gap-4 my-4 justify-between">
      <div className="flex gap-4 justify-center place-items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
          defaultChecked
          className="checkbox checkbox-primary"
        />
        <p className={`${task.completed ? "line-through" : ""} max-w-lg`} style={{ wordWrap: "break-word"}}>{task.text}</p>
      </div>
      <button onClick={() => deleteTask(task.id)} className="btn btn-primary">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
