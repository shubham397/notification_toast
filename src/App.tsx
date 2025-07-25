import { ToastContainer, showToast } from "./components/ToastContainer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <h2>React Toast Notifications</h2>
      <div className="btn-group">
        <button onClick={() => showToast("Operation successful!", "success")}>
          Show Success
        </button>
        <button onClick={() => showToast("Something went wrong!", "error")}>
          Show Error
        </button>
        <button onClick={() => showToast("Here's some info!", "info")}>
          Show Info
        </button>
        <button onClick={() => showToast("Be careful!", "warning")}>
          Show Warning
        </button>
      </div>
    </div>
  );
}
