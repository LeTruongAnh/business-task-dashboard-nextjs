# Business Task Dashboard

A simple task management dashboard for business, sales, and IT teams to track task ownership, priorities, deadlines, and overdue work.

## Overview

Business Task Dashboard is a frontend project built with Next.js, React, TypeScript, and Tailwind CSS.

The goal of this project is to practice core frontend development skills including component-based UI, state management, form handling, filtering, searching, TypeScript data modeling, business logic, localStorage persistence, GitHub workflow, and deployment.

## Business Problem

Small teams often manage tasks manually in spreadsheets. This makes it difficult to track:

- Who owns each task
- Which tasks are high priority
- Which tasks are overdue
- Which work has been completed
- Which tasks need immediate attention

## Solution

This app provides a clean task dashboard that allows users to create tasks, update task status, search by task title or assignee, filter by status and priority, and quickly identify overdue tasks.

## Features

- View all tasks in a dashboard
- Add new task
- Update task status
- Search tasks by title or assignee
- Filter tasks by status
- Filter tasks by priority
- View dashboard summary cards
- Detect overdue tasks
- Persist task data using localStorage
- Responsive UI for desktop and mobile

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- localStorage

## Key Concepts Practiced

- TypeScript interface and union types
- React components
- Props
- useState
- useEffect
- Controlled form inputs
- Event handling
- Array map and filter
- Conditional rendering
- Business logic functions
- localStorage persistence
- Responsive UI with Tailwind CSS

## Project Structure

```txt
business-task-dashboard-nextjs/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    DashboardCards.tsx
    EmptyState.tsx
    SearchBox.tsx
    TaskCard.tsx
    TaskFilters.tsx
    TaskForm.tsx
    TaskList.tsx

  data/
    mockTasks.ts

  lib/
    storage.ts
    taskUtils.ts

  types/
    task.ts

  README.md

Data Model
export type TaskStatus = "todo" | "in_progress" | "done" | "blocked";

export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description?: string;
  assignee: string;
  status: TaskStatus;
  priority: TaskPriority;
  deadline: string;
  createdAt: string;
}
Main Business Logic

The app includes logic to:

Count total tasks
Count completed tasks
Count overdue tasks
Count high-priority tasks
Filter tasks by status
Filter tasks by priority
Search tasks by title or assignee
Exclude completed tasks from overdue calculation
Getting Started
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/business-task-dashboard-nextjs.git
2. Go to the project folder
cd business-task-dashboard-nextjs
3. Install dependencies
npm install
4. Run the development server
npm run dev

Open the app in your browser:

http://localhost:3000
Available Scripts
npm run dev

Run the app in development mode.

npm run build

Build the app for production.

npm run lint

Run lint checks.

Screenshots
Dashboard Overview

Add screenshot here after running the app locally.

![Dashboard Overview](./screenshots/dashboard-overview.png)
Add Task Form

Add screenshot here after running the app locally.

![Add Task Form](./screenshots/add-task-form.png)
Manual Test Checklist
Add Task
Empty title should show validation error
Empty assignee should show validation error
Empty deadline should show validation error
Valid form should add a new task to the list
Search
Search by task title
Search by assignee
Search with no result should show empty state
Filters
Filter by status
Filter by priority
Combine status filter, priority filter, and search
Status Update
Todo task can move to In Progress
In Progress task can move to Done
Blocked task can move to In Progress
Done task button is disabled
Overdue Detection
Task with past deadline and unfinished status should show Overdue
Done task should not be counted as overdue
localStorage
Add a new task
Reload the page
Task should still be saved
What I Learned

Through this project, I practiced how to:

Define TypeScript types for application data
Build reusable React components
Pass data through props
Manage state with useState
Handle form inputs as controlled components
Use useEffect for localStorage persistence
Write reusable business logic functions
Filter and search task data
Build a clean dashboard UI with Tailwind CSS
Structure a Next.js frontend project
Future Improvements
Add backend API
Add PostgreSQL database
Add user authentication
Add role-based access
Add team management
Add due date notifications
Add AI task summary
Add AI next-action suggestions
Add CRM pipeline features
Live Demo

Coming soon.

Author

Built by Le Truong Anh as a frontend learning and portfolio project.


---

# 2. Tạo folder screenshots

Trong thư mục gốc project, tạo folder:

```txt
screenshots/

Cấu trúc thành:

business-task-dashboard-nextjs/
  screenshots/
    dashboard-overview.png
    add-task-form.png
