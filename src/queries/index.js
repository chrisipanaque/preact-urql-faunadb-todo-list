export const ALL_TODOS = `
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

export const ADD_TODO = `
  mutation ($task: String!, $isCompleted: Boolean!) {
    createTodo(data: {task: $task, isCompleted: $isCompleted}) {
      _id
      task
      isCompleted
    }
  }
`;

export const DELETE_TODO = `
  mutation ($id: ID!) {
    deleteTodo(id: $id) {
      _id
      task
      isCompleted
    }
  }
`;
