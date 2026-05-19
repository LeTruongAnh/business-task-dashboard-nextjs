"use client";

import { useEffect, useState } from "react";
import DashboardCards from "@/components/DashboardCards";
import SearchBox from "@/components/SearchBox";
import TaskFilters from "@/components/TaskFilters";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { filterTasks } from "@/lib/taskUtils";
import { loadTasksFromStorage, saveTasksToStorage } from "@/lib/storage";
import { Task, TaskPriority, TaskStatus } from "@/types/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all">("all");
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority | "all">(
    "all"
  );

  useEffect(() => {
    const storedTasks = loadTasksFromStorage();
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTasks(storedTasks);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveTasksToStorage(tasks);
    }
  }, [tasks, isLoaded]);

  function handleAddTask(newTask: Task) {
    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  function handleUpdateStatus(taskId: string, nextStatus: TaskStatus) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus } : task
      )
    );
  }

  const visibleTasks = filterTasks(
    tasks,
    statusFilter,
    priorityFilter,
    searchTerm
  );

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Business Task Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage team tasks, priorities, deadlines, and overdue work.
          </p>
        </div>

        <DashboardCards tasks={tasks} />

        <TaskForm onAddTask={handleAddTask} />

        <div className="grid gap-4 md:grid-cols-2">
          <SearchBox
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <TaskFilters
            statusFilter={statusFilter}
            priorityFilter={priorityFilter}
            onStatusChange={setStatusFilter}
            onPriorityChange={setPriorityFilter}
          />
        </div>

        <TaskList
          tasks={visibleTasks}
          onUpdateStatus={handleUpdateStatus}
        />
      </div>
    </main>
  );
}