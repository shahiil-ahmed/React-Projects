import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, setTodos, filter, setFilter, allTodos }) => {

  const [input, setInput] = useState("");
  
  // Add task function
  const handleAdd = () => {
    const trimInput = input.trim();
    if (trimInput === "") {
      alert("Task can't be empty!");
    } else {
      setTodos([
        ...allTodos,
        {
          id: Date.now(),
          text: trimInput,
          completed: false,
        },
      ]);
      setInput("");
    }
  };
  return (
    <div>
      <div className="flex mb-4">

        {/* Input box */}
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="flex-1 p-2 border rounded"
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition-colors duration-200"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded cursor-pointer ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded cursor-pointer ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("not-completed")}
          className={`px-3 py-1 rounded cursor-pointer ${filter === "not-completed"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
            }`}
        >
          Not Complete
        </button>
      </div>
      <ul>
        {todos.length === 0 ? (
          <li className="text-center text-gray-400 py-2">
            No tasks in this category
          </li>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              allTodos={allTodos}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
