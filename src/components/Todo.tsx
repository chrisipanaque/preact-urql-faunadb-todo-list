import { TodoType } from '../types';
import { useMutation } from 'urql';
import { COMPLETE_TODO_MUTATION, DELETE_TODO_MUTATION } from '../api/queries';

type TodoProps = {
  todo: TodoType;
};

const Todo: React.FunctionComponent<TodoProps> = ({ todo }: TodoProps) => {
  const { _id, task, isCompleted } = todo;

  const [, deleteTodo] = useMutation(DELETE_TODO_MUTATION);
  const [, updateTodo] = useMutation(COMPLETE_TODO_MUTATION);

  const handleToggle = () => {
    updateTodo({ id: _id, task, isCompleted: !isCompleted });
  };

  return (
    <div>
      <input type="checkbox" checked={isCompleted} onChange={handleToggle} />
      {task}
      <button onClick={() => deleteTodo({ id: _id })}>delete</button>
    </div>
  );
};

export default Todo;
