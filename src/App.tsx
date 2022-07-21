import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodosHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const clickHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodosHandler} />
      <Todos items={todos} onClick={clickHandler} />
    </div>
  );
}

export default App;
