import { TodoType } from '../interfaces';
import { useQuery } from 'urql';
import { ALL_TODOS_QUERY } from '../api/queries';
import Todo from './Todo';

const AllTodos: React.FunctionComponent = () => {
  const [allTodos] = useQuery({
    query: ALL_TODOS_QUERY,
  });

  return (
    <>
      {allTodos.data.getTodos.data.map(
        ({ _id, task, isCompleted }: TodoType) => (
          <Todo key={_id} task={task} isCompleted={isCompleted} />
        )
      )}
    </>
  );
};

export default AllTodos;
