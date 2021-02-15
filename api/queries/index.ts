export const ALL_TODOS_QUERY = `
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

export const ADD_TODO_MUTATION = `
  mutation ($task: String!, $isCompleted: Boolean!) {
    createTodo(data: {task: $task, isCompleted: $isCompleted}) {
      _id
      task
      isCompleted
    }
  }
`;

export const COMPLETE_TODO_MUTATION = `
  mutation ($id: ID!, $task: String!, $isCompleted: Boolean!) {
    updateTodo(id: $id, data: {task: $task, isCompleted: $isCompleted,}) {
      _id
      task
      isCompleted
    }
  }
`;

export const DELETE_TODO_MUTATION = `
  mutation ($id: ID!) {
    deleteTodo(id: $id) {
      _id
      task
      isCompleted
    }
  }
`;
