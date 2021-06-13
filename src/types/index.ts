export type TodoType = {
  _id: string;
  task: string;
  isCompleted: boolean;
};

export type AllTodosType = {
  allTodos: TodoType[];
};
