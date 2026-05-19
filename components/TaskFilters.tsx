import { TaskPriority, TaskStatus } from "@/types/task";

interface TaskFiltersProps {
  statusFilter: TaskStatus | "all";
  priorityFilter: TaskPriority | "all";
  onStatusChange: (value: TaskStatus | "all") => void;
  onPriorityChange: (value: TaskPriority | "all") => void;
}

export default function TaskFilters({
  statusFilter,
  priorityFilter,
  onStatusChange,
  onPriorityChange,
}: TaskFiltersProps) {
  return (
    <div className="grid gap-4 rounded-xl bg-white p-4 shadow md:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Status Filter
        </label>

        <select
          value={statusFilter}
          onChange={(event) =>
            onStatusChange(event.target.value as TaskStatus | "all")
          }
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
          <option value="blocked">Blocked</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Priority Filter
        </label>

        <select
          value={priorityFilter}
          onChange={(event) =>
            onPriorityChange(event.target.value as TaskPriority | "all")
          }
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}