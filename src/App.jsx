import TodoList from "./components/TodoList";

const App = () => {
  return (
    <>
      <div className="grid items-center m-auto h-screen w-1/3">
        <input
          type="checkbox"
          value="light"
          className="toggle theme-controller absolute top-5 right-5"
        />
        <div>
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default App;
