import { Task, TaskStatus } from "@/types/task";
import EmptyState from "./EmptyState";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  onUpdateStatus: (taskId: string, nextStatus: TaskStatus) => void;
}

export default function TaskList({ tasks, onUpdateStatus }: TaskListProps) {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Task List</h2>
        <p className="text-sm text-gray-500">{tasks.length} task(s)</p>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onUpdateStatus={onUpdateStatus}
          />
        ))}
      </div>
    </section>
  );
}