import { useQuery } from "urql";

const TODOS = `
  query {
    getTodos {
      data {
        task
        isCompleted
      }
    }
  }
`;

const Todos = () => {
  const [result] = useQuery({ query: TODOS });
  const { data, fetching, error } = result;

  if (fetching) return <div>Fetching..</div>;
  if (error) return <div>Error!</div>;

  const todos = data.getTodos.data;

  return (
    <div>
      {todos.map(todo => (
        <div key={todo._id}>{todo.task}</div>
      ))}
    </div>
  );
};

export default Todos;
