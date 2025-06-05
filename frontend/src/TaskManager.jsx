import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newItem = {
      id: tasks.length + 1,
      title: newTask,
      completed: false
    };
    setTasks([...tasks, newItem]);
    setNewTask('');
  };

  const toggleComplete = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10  p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-black">📝 Task Manager</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border border-gray-300 px-3 py-2 rounded-md mr-2"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="space-y-8">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center px-3 py-2 border rounded-md ${
              task.completed ? 'bg-green-100 line-through text-gray-500' : 'bg-gray-100'
            }`}
          >
            <span>{task.title}</span>
            <div className="space-x-2">
              <button
                onClick={() => toggleComplete(task.id)}
                className="text-sm bg-yellow-400 px-2 py-1 rounded"
              >
                {task.completed ? 'Undo' : 'Done'}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-sm bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
