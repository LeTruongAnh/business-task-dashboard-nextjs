import { isOverdue } from "@/lib/taskUtils";
import { Task, TaskPriority, TaskStatus } from "@/types/task";

interface TaskCardProps {
  task: Task;
  onUpdateStatus: (taskId: string, nextStatus: TaskStatus) => void;
}

function getNextStatus(status: TaskStatus): TaskStatus {
  if (status === "todo") return "in_progress";
  if (status === "in_progress") return "done";
  if (status === "blocked") return "in_progress";
  return "done";
}

function getStatusButtonLabel(status: TaskStatus): string {
  if (status === "todo") return "Start Task";
  if (status === "in_progress") return "Mark as Done";
  if (status === "blocked") return "Unblock Task";
  return "Completed";
}

function getStatusLabel(status: TaskStatus): string {
  const labels: Record<TaskStatus, string> = {
    todo: "Todo",
    in_progress: "In Progress",
    done: "Done",
    blocked: "Blocked",
  };

  return labels[status];
}

function getPriorityLabel(priority: TaskPriority): string {
  const labels: Record<TaskPriority, string> = {
    low: "Low",
    medium: "Medium",
    high: "High",
  };

  return labels[priority];
}

function getStatusBadgeClass(status: TaskStatus): string {
  const classes: Record<TaskStatus, string> = {
    todo: "bg-gray-100 text-gray-700",
    in_progress: "bg-blue-100 text-blue-700",
    done: "bg-green-100 text-green-700",
    blocked: "bg-red-100 text-red-700",
  };

  return classes[status];
}

function getPriorityBadgeClass(priority: TaskPriority): string {
  const classes: Record<TaskPriority, string> = {
    low: "bg-slate-100 text-slate-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-orange-100 text-orange-700",
  };

  return classes[priority];
}

export default function TaskCard({ task, onUpdateStatus }: TaskCardProps) {
  const overdue = isOverdue(task.deadline, task.status);
  const isDone = task.status === "done";

  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {task.title}
          </h3>

          {task.description && (
            <p className="text-sm leading-6 text-gray-600">
              {task.description}
            </p>
          )}
        </div>

        {overdue && (
          <span className="w-fit rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
            Overdue
          </span>
        )}
      </div>

      <div className="mt-5 grid gap-3 text-sm md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Assignee
          </p>
          <p className="mt-1 font-medium text-gray-800">{task.assignee}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Status
          </p>
          <span
            className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeClass(
              task.status
            )}`}
          >
            {getStatusLabel(task.status)}
          </span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Priority
          </p>
          <span
            className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getPriorityBadgeClass(
              task.priority
            )}`}
          >
            {getPriorityLabel(task.priority)}
          </span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Deadline
          </p>
          <p className="mt-1 font-medium text-gray-800">{task.deadline}</p>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button
          type="button"
          disabled={isDone}
          onClick={() => onUpdateStatus(task.id, getNextStatus(task.status))}
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
        >
          {getStatusButtonLabel(task.status)}
        </button>
      </div>
    </article>
  );
}