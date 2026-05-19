import { Task } from "@/types/task";
import { getTaskSummary } from "@/lib/taskUtils";

interface DashboardCardsProps {
  tasks: Task[];
}

export default function DashboardCards({ tasks }: DashboardCardsProps) {
  const summary = getTaskSummary(tasks);

  return (
    <section className="grid gap-4 md:grid-cols-4">
      <div className="rounded-xl bg-white p-4 shadow">
        <p className="text-sm text-gray-500">Total Tasks</p>
        <p className="text-2xl font-bold">{summary.total}</p>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <p className="text-sm text-gray-500">Completed</p>
        <p className="text-2xl font-bold">{summary.completed}</p>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <p className="text-sm text-gray-500">Overdue</p>
        <p className="text-2xl font-bold text-red-600">{summary.overdue}</p>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <p className="text-sm text-gray-500">High Priority</p>
        <p className="text-2xl font-bold">{summary.highPriority}</p>
      </div>
    </section>
  );
}