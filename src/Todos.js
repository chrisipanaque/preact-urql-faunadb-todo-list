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
  if (error) {
    console.log("ERROR", error);

    return <div>Error!</div>;
  }

  const todos = data.getTodos.data;

  console.log("DATA FROM QUERY", data);

  return (
    <div>
      {todos.map((todo, i) => (
        <div key={i}>{todo.task}</div>
      ))}
    </div>
  );
};

export default Todos;
