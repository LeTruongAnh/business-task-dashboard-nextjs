import { Task } from "@/types/task";
import { getTaskSummary } from "@/lib/taskUtils";

interface DashboardCardsProps {
  tasks: Task[];
}

export default function DashboardCards({ tasks }: DashboardCardsProps) {
  const summary = getTaskSummary(tasks);

  const cards = [
    {
      label: "Total Tasks",
      value: summary.total,
      hint: "All active records",
    },
    {
      label: "Completed",
      value: summary.completed,
      hint: "Finished work",
    },
    {
      label: "Overdue",
      value: summary.overdue,
      hint: "Need attention",
    },
    {
      label: "High Priority",
      value: summary.highPriority,
      hint: "Important tasks",
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-medium text-gray-500">{card.label}</p>
          <p className="mt-3 text-3xl font-bold text-gray-900">
            {card.value}
          </p>
          <p className="mt-1 text-xs text-gray-400">{card.hint}</p>
        </div>
      ))}
    </section>
  );
}