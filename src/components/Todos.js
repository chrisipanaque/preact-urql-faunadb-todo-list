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
  const [getTodosResult] = useQuery({
    query: ALL_TODOS
  });

  const [addTodoResult, addTodoMutation] = useMutation(ADD_TODO);

  const [deleteTodoResult, deleteTodoMutation] = useMutation(DELETE_TODO);

  const addTodo = async (values) => {
    try {
      console.log("values", values);

      await addTodoMutation(values);

      console.log("todo added");
      console.log("addTodoResult", addTodoResult);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodoMutation({ id });

      console.log("deleted");
      console.log("deleteTodoResult", deleteTodoResult);
    } catch (error) {
      console.log(error);
    }
  };

  const { data, fetching, error, stale } = getTodosResult;

  if (stale) return <div>Staling..</div>;
  if (fetching) return <div>Fetching..</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <AddTodo addTodo={addTodo} />

      {data.getTodos.data.map((todo) => (
        <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default Todos;
