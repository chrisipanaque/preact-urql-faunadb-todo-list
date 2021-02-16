import { client } from './urqlClient';
import { ADD_TODO_MUTATION } from './queries';
import { TodoType } from '../interfaces';

export async function addTodo(todo: TodoType) {
  const data = await client
    .mutation(ADD_TODO_MUTATION, {
      task: todo.task,
      isCompleted: todo.isCompleted,
    })
    .toPromise();

  console.log('data addTodo function', data);
}
