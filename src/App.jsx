import { useState } from "react";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodoItem(title) {
    console.log(title);
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function deleteTodoItem(id) {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => id !== todo.id);
    });
  }

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[100vh]">
      <div className="flex flex-col gap-3 w-256 px-6 pt-10 pb-8 shadow-xl">
        <h2 className="pt-8 text-base font-semibold leading-7">To-Do List</h2>
        <TodoForm addTodos={addTodoItem} />
        <TodoList todos={todos} deleteTodo={deleteTodoItem} />
      </div>
    </div>
  );
}

export default App;
