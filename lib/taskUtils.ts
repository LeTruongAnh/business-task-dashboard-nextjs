import { Task, TaskPriority, TaskStatus } from "@/types/task";

export function isOverdue(deadline: string, status: TaskStatus): boolean {
  if (status === "done") return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const deadlineDate = new Date(deadline);
  deadlineDate.setHours(0, 0, 0, 0);

  return deadlineDate < today;
}

export function filterTasks(
  tasks: Task[],
  statusFilter: TaskStatus | "all",
  priorityFilter: TaskPriority | "all",
  searchTerm: string
): Task[] {
  return tasks.filter((task) => {
    const matchesStatus =
      statusFilter === "all" || task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "all" || task.priority === priorityFilter;

    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesPriority && matchesSearch;
  });
}

export function getTaskSummary(tasks: Task[]) {
  return {
    total: tasks.length,
    completed: tasks.filter((task) => task.status === "done").length,
    overdue: tasks.filter((task) => isOverdue(task.deadline, task.status))
      .length,
    highPriority: tasks.filter((task) => task.priority === "high").length,
  };
}