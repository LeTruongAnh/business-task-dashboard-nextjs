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