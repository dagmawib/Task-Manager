import { useState } from "react";
import TaskManager from "../TaskManager";

export default function TaskTabs() {
  const [activeTab, setActiveTab] = useState("add");

  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Read a book", completed: true },
  ]);

  const addTask = ({ title, description }) => {
    const newItem = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newItem]);
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "add":
        return (
          <TaskManager
            tasks={tasks}
            onAdd={addTask}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            showInput={true}
            title="Add Smarter, Achieve Faster!"
          />
        );
      case "completed":
        return (
          <TaskManager
            tasks={tasks.filter((t) => t.completed)}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            showInput={false}
            title="Checked Off & Celebrated"
          />
        );
      case "pending":
        return (
          <TaskManager
            tasks={tasks.filter((t) => !t.completed)}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            showInput={false}
            title="Next Up: Your Time to Shine"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-md">
      <div className="flex space-x-4 border-b pb-2 mb-4">
        {["add", "completed", "pending"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize px-4 py-2 rounded-xl text-sm font-medium ${
              activeTab === tab ? "text-blue-600 underline" : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-2">{renderTabContent()}</div>
    </div>
  );
}
