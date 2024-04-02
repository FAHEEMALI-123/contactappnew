import React, { useState } from "react";
import Tabler from "./tabler.tsx";
import './App.css'

function App() {
  const [employeedet, setEmployeedet] = useState([]);

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">ContactAPP</button>
        <button className="btn btn-active btn-secondary">Add Member</button>
      </div>
      <Tabler />
    </div>
  );
}

export default App;
