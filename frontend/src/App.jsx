import "./App.css";
import TaskTabs from "./components/TaskTabs";

function App() {
  return (
    <>
      <TaskTabs />

      <footer className="text-center mt-10 text-gray-500">
        Made by{" "}
        <a
          href="https://www.linkedin.com/in/dagi-belay1430/"
          className="text-blue-400"
        >
          Dagmawi Belayneh
        </a>
      </footer>
    </>
  );
}

export default App;
