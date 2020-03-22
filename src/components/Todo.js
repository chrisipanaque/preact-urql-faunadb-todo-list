const Todo = ({ todo, deleteTodo }) => {
  const { _id, task, isComplete } = todo;

  return (
    <div>
      {task}
      <button onClick={() => deleteTodo(_id)}>delete</button>
    </div>
  );
};

export default Todo;
