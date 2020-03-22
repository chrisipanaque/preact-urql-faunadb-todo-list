import { useQuery, useMutation } from "urql";
import { useState } from "preact/hooks";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const ALL_TODOS = `
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
  const [input, setInput] = useState({
    task: "",
    isCompleted: false
  });

  const [result] = useQuery({
    query: ALL_TODOS
  });
  const [addTodoResult, addTodoMutation] = useMutation(ADD_TODO);
  const [deleteTodoResult, deleteTodoMutation] = useMutation(DELETE_TODO);

  const addTodo = async () => {
    try {
      console.log("input", input);
      await addTodoMutation(input);
      console.log("todo added");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async id => {
    try {
      await deleteTodoMutation({ id });
      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = event => {
    event.persist();
    setInput(input => ({
      ...input,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTodo();
    setInput({
      task: ""
    });
  };

  const { data, fetching, error, stale } = result;

  if (stale) return <div>Staling..</div>;
  if (fetching) return <div>Fetching..</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="task"
          name="task"
          onChange={handleInput}
          value={input.task}
        />
      </form>

      {data.getTodos.data.map(todo => (
        <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default Todos;
