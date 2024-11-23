import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <>
      <div className="flex flex-col justify-center gap-3">
        <h2>To Do:</h2>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
}
