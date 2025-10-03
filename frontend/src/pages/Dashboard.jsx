import React, { useEffect, useState } from "react";
import API from "../api/api.js"; // adjust path if needed

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/auth/profile");
        setUser(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };

    fetchProfile();
    fetchTasks();
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  // Add task
  const addTask = async () => {
    if (!newTask.trim()) return;
    setLoading(true);
    try {
      const res = await API.post("/tasks", { title: newTask });
      setTasks([...tasks, res.data]);
      setNewTask("");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
    setLoading(false);
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  if (!user) return <p className="text-center mt-10">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* User Card */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome, {user.name} 👋
        </h1>
      </div>

      {/* Task Section */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Tasks ✅
        </h2>

        {/* Add Task */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter new task..."
            className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={addTask}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>

        {/* Task List */}
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet. Add one above!</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg shadow-sm"
              >
                <span>{task.title}</span>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
