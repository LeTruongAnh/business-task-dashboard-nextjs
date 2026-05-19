import DashboardCards from "@/components/DashboardCards";
import TaskList from "@/components/TaskList";
import { mockTasks } from "@/data/mockTasks";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-3xl font-bold">Business Task Dashboard</h1>

        <DashboardCards tasks={mockTasks} />

        <TaskList tasks={mockTasks} />
      </div>
    </main>
  );
}