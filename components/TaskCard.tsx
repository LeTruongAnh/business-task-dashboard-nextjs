import { isOverdue } from "@/lib/taskUtils";
import { Task, TaskStatus } from "@/types/task";

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

export default function TaskCard({ task, onUpdateStatus }: TaskCardProps) {
  const overdue = isOverdue(task.deadline, task.status);
  const isDone = task.status === "done";

  return (
    <article className="rounded-xl bg-white p-4 shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold">{task.title}</h3>
          {task.description && (
            <p className="mt-1 text-sm text-gray-600">{task.description}</p>
          )}
        </div>

        {overdue && (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
            Overdue
          </span>
        )}
      </div>

      <div className="mt-4 grid gap-2 text-sm text-gray-700 md:grid-cols-4">
        <p>
          <span className="font-medium">Assignee:</span> {task.assignee}
        </p>
        <p>
          <span className="font-medium">Status:</span> {task.status}
        </p>
        <p>
          <span className="font-medium">Priority:</span> {task.priority}
        </p>
        <p>
          <span className="font-medium">Deadline:</span> {task.deadline}
        </p>
      </div>

      <button
        type="button"
        disabled={isDone}
        onClick={() => onUpdateStatus(task.id, getNextStatus(task.status))}
        className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        {getStatusButtonLabel(task.status)}
      </button>
    </article>
  );
}