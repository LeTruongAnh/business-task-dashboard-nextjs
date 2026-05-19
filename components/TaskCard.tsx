import { isOverdue } from "@/lib/taskUtils";
import { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const overdue = isOverdue(task.deadline, task.status);

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
    </article>
  );
}