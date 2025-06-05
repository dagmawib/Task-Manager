import React, { useState } from "react";

const TaskManager = ({
  tasks,
  onAdd,
  onToggle,
  onDelete,
  showInput,
  title,
}) => {
  const [newTask, setNewTask] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (newTask.trim() === "") {
      setError("Task title cannot be empty.");
      return;
    }

    onAdd({
      title: newTask,
      description: description.trim(),
    });

    setNewTask("");
    setDescription("");
    setError("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      <h1 className="text-xl font-bold mb-4 text-center">{title}</h1>
      {showInput && (
        <>
          <div className="flex flex-col gap-3 mb-4">
            <input
              type="text"
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              placeholder="Task title"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <textarea
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              placeholder="Task description (optional)"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md w-full sm:w-auto"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </>
      )}

      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`px-4 py-3 border rounded-md ${
              task.completed
                ? "bg-green-100 line-through text-gray-500"
                : "bg-gray-100"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <span className="font-semibold text-start">{task.title}</span>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => onToggle(task.id)}
                  className="text-sm bg-yellow-400 px-3 py-1 rounded"
                >
                  {task.completed ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
            {task.description && (
              <p className="mt-1 text-sm text-gray-700 text-start">
                {task.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
