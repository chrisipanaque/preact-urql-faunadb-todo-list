import { useQuery, useMutation } from "urql";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

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

const ADD_TODO = `
  mutation ($task: String!, $isCompleted: Boolean!) {
    createTodo(data: {task: $task, isCompleted: $isCompleted}) {
      _id
      task
      isCompleted
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
  const [result] = useQuery({ query: TODOS, requestPolicy: "network-only" });
  const [addTodoResult, addTodoMutation] = useMutation(ADD_TODO);
  const [deleteTodoResult, deleteTodoMutation] = useMutation(DELETE_TODO);

  const { data, fetching, error, stale } = result;

  const addTodo = values => {
    const addTodoAsync = async values => {
      try {
        await addTodoMutation(values);
        console.log("todo added");
      } catch (error) {
        console.log(error);
      }
    };

    addTodoAsync(values);
  };

  const deleteTodo = async id => {
    try {
      await deleteTodoMutation({ id });
      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  };

  if (stale) return <div>Staling..</div>;
  if (fetching) return <div>Fetching..</div>;
  if (error) return <div>Error!</div>;

  console.log("DATA", data);

  return (
    <>
      <AddTodo addTodo={addTodo} />

      {data.getTodos.data.map(todo => (
        <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default Todos;
