import { useQuery, useMutation } from "urql";
import Todo from "./Todo";

const TODOS = `
  query {
    getTodos {
      data {
        _id
        task
        isCompleted
      }
    }
  }
`;

const DELETE_TODO = `
  mutation ($id: ID!) {
    deleteTodo(id: $id) {
      _id
      task
      isCompleted
    }
  }
`;

const Todos = () => {
  const [result] = useQuery({ query: TODOS });
  const [deleteTodoResult, deleteTodoMutation] = useMutation(DELETE_TODO);

  const { data, fetching, error } = result;

  const deleteTodo = async id => {
    try {
      await deleteTodoMutation({ id });
    } catch (error) {
      console.log(error);
    }
  };

  if (fetching) return <div>Fetching..</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      {data.getTodos.data.map(todo => (
        <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default Todos;
