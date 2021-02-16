import { AllTodosType, TodoType } from '../interfaces';

export default function AllTodos({ allTodos }: AllTodosType) {
  return (
    <>
      {allTodos.map(({ _id, task }: TodoType) => (
        <div key={_id}>{task}</div>
      ))}
    </>
  );
}
