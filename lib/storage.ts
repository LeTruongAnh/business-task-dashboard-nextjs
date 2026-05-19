import { mockTasks } from "@/data/mockTasks";
import { Task } from "@/types/task";

const TASK_STORAGE_KEY = "business-task-dashboard-tasks";

export function loadTasksFromStorage(): Task[] {
  if (typeof window === "undefined") {
    return mockTasks;
  }

  const savedTasks = localStorage.getItem(TASK_STORAGE_KEY);

  if (!savedTasks) {
    return mockTasks;
  }

  try {
    return JSON.parse(savedTasks) as Task[];
  } catch {
    return mockTasks;
  }
}

export function saveTasksToStorage(tasks: Task[]): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
}