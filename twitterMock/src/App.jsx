import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Rightbar from "./components/Rightbar/Rightbar";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Profile */}
      <div>profile</div>

      {/* Trends */}
      <div>
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
