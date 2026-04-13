# Task Management API

A simple REST API for managing tasks built with Node.js and Express.

## Features

- Create, read, update, and delete tasks
- Filter tasks by status (pending/done)
- Sort tasks by creation date
- Mark tasks as done
- Standard JSON API responses with error handling

## Setup

Install dependencies:
```bash
npm install
```

## Running

Start the server:
```bash
npm start
```

Start with hot-reload (development):
```bash
npm run dev
```

The server runs on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks (supports `?status=` and `?sort=createdAt`) |
| POST | `/tasks` | Create a new task |
| GET | `/tasks/:id` | Get a task by ID |
| PUT | `/tasks/:id` | Update a task |
| PATCH | `/tasks/:id/done` | Mark task as done |
| DELETE | `/tasks/:id` | Delete a task |

## Task Schema

```javascript
{
  id: number,
  title: string (required),
  description: string (optional),
  status: "pending" or "done",
  createdAt: date
}
```

## Example Requests

**Create a task:**
```json
POST /tasks
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

**Get all pending tasks:**
```
GET /tasks?status=pending
```

**Mark as done:**
```
PATCH /tasks/1/done
```

## Author

Amay Mishra
