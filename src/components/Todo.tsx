import { TodoType } from '../interfaces';
import { useMutation } from 'urql';
import { DELETE_TODO_MUTATION } from '../api/queries';

type TodoProps = {
  todo: TodoType;
};

const Todo: React.FunctionComponent<TodoProps> = ({ todo }: TodoProps) => {
  const { _id, task, isCompleted } = todo;
  const [, deleteTodo] = useMutation(DELETE_TODO_MUTATION);
  // const handleChange = () => {
  //   completeTodo(_id, task, !isCompleted);
  // };

  return (
    <div>
      {/* <input type="checkbox" checked={isCompleted} onChange={handleChange} /> */}
      {task}
      {`${isCompleted}`}
      <button onClick={() => deleteTodo({ id: _id })}>delete</button>
    </div>
  );
};

export default Todo;
