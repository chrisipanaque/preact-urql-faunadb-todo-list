import { TodoType } from '../interfaces';
import { useQuery } from 'urql';
import { ALL_TODOS_QUERY } from '../api/queries';

export default function AllTodos() {
  const [allTodos] = useQuery({
    query: ALL_TODOS_QUERY,
  });

  return (
    <>
      {allTodos.data.getTodos.data.map(({ _id, task }: TodoType) => (
        <div key={_id}>{task}</div>
      ))}
    </>
  );
}
