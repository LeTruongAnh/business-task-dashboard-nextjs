import { Task } from "@/types/task";

export const mockTasks: Task[] = [
  {
    id: "T001",
    title: "Prepare real estate sales report",
    description: "Create weekly sales report for management",
    assignee: "Phong",
    status: "in_progress",
    priority: "high",
    deadline: "2026-06-01",
    createdAt: "2026-05-19"
  },
  {
    id: "T002",
    title: "Update customer lead list",
    description: "Clean duplicate leads and update phone numbers",
    assignee: "Sales Team",
    status: "todo",
    priority: "medium",
    deadline: "2026-06-03",
    createdAt: "2026-05-19"
  },
  {
    id: "T003",
    title: "Review AI chatbot flow",
    description: "Check chatbot responses for property project FAQs",
    assignee: "IT Team",
    status: "blocked",
    priority: "high",
    deadline: "2026-05-20",
    createdAt: "2026-05-18"
  },
  {
    id: "T004",
    title: "Publish landing page update",
    description: "Update project benefits and contact form",
    assignee: "Marketing",
    status: "done",
    priority: "low",
    deadline: "2026-05-22",
    createdAt: "2026-05-18"
  }
];