import AllTodos from '../components/AllTodos';
import { getTodos } from '../api/getTodos';

const TodoApp = ({ allTodos }: any) => {
  return (
    <>
      <AllTodos allTodos={allTodos} />
    </>
  );
};

export default TodoApp;

export const getStaticProps = async () => {
  const allTodos = await getTodos();
  return {
    props: {
      allTodos,
    },
  };
};
