const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const { _id, task, isComplete } = todo;

  const handleChange = (id) => {
    completeTodo(id, !isComplete);
  };

  return (
    <div>
      <input type="checkbox" checked={isComplete} onChange={handleChange} />
      {task}
      <button onClick={() => deleteTodo(_id)}>delete</button>
    </div>
  );
};

export default Todo;
