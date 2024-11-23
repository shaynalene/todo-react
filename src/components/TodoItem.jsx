//import { useState } from "react";

export default function TodoItem({ id, title, completed, deleteTodo }) {
  return (
    <div>
      <ul>
        <li className="flex items-center justify-between">
          <div>
            <input id="todo-item" type="checkbox" checked={completed} />
            <label htmlFor="todo-item" className="ms-2 text-sm font-medium ">
              {title}
            </label>
          </div>
          <button
            onClick={() => deleteTodo(id)}
            className="bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
