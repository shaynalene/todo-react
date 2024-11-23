import { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputSubmit = (e) => {
    e.preventDefault();

    addTodos(inputValue);
    console.log("Todo added");
  };

  return (
    <>
      <form onSubmit={handleInputSubmit}>
        <div className="sm:col-span-4 ">
          <label htmlFor="todo-form" className="block text-sm/6">
            Enter Task To-Do:
          </label>
          <div className="flex justify-between gap-3">
            <input
              id="todo-form"
              className="block w-full rounded-md p-2 border-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className=" shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
