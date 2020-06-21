const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const { _id, task, isCompleted } = todo;

  const handleChange = () => {
    completeTodo(_id, task, !isCompleted);
  };

  return (
    <div>
      <input type="checkbox" checked={isCompleted} onChange={handleChange} />
      {task}
      <button onClick={() => deleteTodo(_id)}>delete</button>
    </div>
  );
};

export default Todo;
