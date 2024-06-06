import React from 'react';
import { MdClose } from 'react-icons/md';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  const style = {
    textDecoration: todo.isCompleted ? 'line-through' : ''
  };

  const handleComplete = () => {
    completeTodo(index);
  };

  const handleRemove = () => {
    removeTodo(index);
  };

  return (
    <div className='todo' style={style}>
      <div>
        <span onClick={handleComplete} className='btn-check'>
          {todo.isCompleted ? <FiCheckCircle /> : <FiCircle />}
        </span>
        {todo.text}
      </div>
      <MdClose onClick={handleRemove} className='btn-close' id={`remove-${index}`} />
    </div>
  );
};

export default Todo;
