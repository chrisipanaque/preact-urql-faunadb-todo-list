## Live Demo
https://preact-urql-faunadb-todo-list.netlify.app/

## Frontend
- preact
- urql

## Database
- faunadb

## FaunaDB Schema
```js
type Todo {
  task: String!
  isCompleted: Boolean!
}

type Query {
  getTodos: [Todo]!
}
```

## Environment Variables
```js 
PREACT_APP_FAUNADB_URL
PREACT_APP_FAUNADB_TOKEN
```