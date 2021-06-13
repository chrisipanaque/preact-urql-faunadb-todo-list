import AddTodo from '../components/AddTodo';
import AllTodos from '../components/AllTodos';

const TodoApp: React.FunctionComponent = () => {
  return (
    <>
      <AddTodo />
      <AllTodos />
    </>
  );
};

export default TodoApp;
