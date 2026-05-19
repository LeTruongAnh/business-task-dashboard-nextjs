import { Task } from "@/types/task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 text-center text-gray-500 shadow">
        No tasks found.
      </div>
    );
  }

  return (
    <section className="space-y-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </section>
  );
}