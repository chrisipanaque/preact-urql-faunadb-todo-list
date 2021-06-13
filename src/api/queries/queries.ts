export const ALL_TODOS_QUERY = `
query {
  getTodos {
    data {
      _id
      task
      isCompleted
      time
    }
  }
}
`;

export const ADD_TODO_MUTATION = `
  mutation createTodo($task: String!, $isCompleted: Boolean!, $time: Time!) {
    createTodo(data: {task: $task, isCompleted: $isCompleted, time: $time}) {
      _id
      task
      isCompleted
      time
    }
  }
`;

export const COMPLETE_TODO_MUTATION = `
  mutation ($id: ID!, $task: String!, $isCompleted: Boolean!, $time: Time!) {
    updateTodo(id: $id, data: {task: $task, isCompleted: $isCompleted, time: $time}) {
      _id
      task
      isCompleted
      time
    }
  }
`;

export const DELETE_TODO_MUTATION = `
  mutation ($id: ID!) {
    deleteTodo(id: $id) {
      _id
      task
      isCompleted
      time
    }
  }
`;
