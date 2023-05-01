import "./App.css";
import { TodoInput } from "./Components/TodoInput";
import TodoList from "./Components/ToDoList";

function App() {
  return (
    <>
      <TodoList />
      <TodoInput />
    </>
  );
}

export default App;