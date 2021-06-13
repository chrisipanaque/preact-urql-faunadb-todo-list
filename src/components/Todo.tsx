type TodoProps = {
  task: string;
  isCompleted: boolean;
};

const Todo: React.FunctionComponent<TodoProps> = ({ task, isCompleted }) => {
  // const handleChange = () => {
  //   completeTodo(_id, task, !isCompleted);
  // };

  return (
    <div>
      {/* <input type="checkbox" checked={isCompleted} onChange={handleChange} /> */}
      {task}
      {`${isCompleted}`}
      {/* <button onClick={() => deleteTodo(_id)}>delete</button> */}
    </div>
  );
};

export default Todo;
