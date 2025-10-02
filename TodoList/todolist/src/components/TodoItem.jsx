import React from "react";

const TodoItem = ({
  todo,
  setTodos,
  allTodos,
}) => {
  const handleToggle = () => {
    setTodos(
      allTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = () => {
    setTodos(allTodos.filter((t) => t.id !== todo.id));
  };
  return (
    <li className='flex items-center mb-2'>
    <span 
    className={`flex-1 cursor-pointer ${todo.completed? "line-through text-gray-500":""}`}
    onClick={handleToggle}
    >
        {todo.text}
    </span>
    <button
    className='ml-2 p-2 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 cursor-pointer rounded'
    onClick={handleDelete}
    >
        Delete
    </button>
   </li>
  );
};

export default TodoItem;
