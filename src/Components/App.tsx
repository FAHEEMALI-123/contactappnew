import React, { useState } from "react";
import Tabler from "./tabler.tsx";
import './App.css';
import  {IEmployee, dummyEmployee} from './Employeetype.ts';
import EnterDet from "./EnterDet.tsx";


function App() {
  const [employeedet, setEmployeedet] = useState<IEmployee[]>(dummyEmployee);

  const AddMember=()=>{
    return(
      <div>
        <EnterDet />
      </div>
    );
  }

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">ContactAPP</button>
        <button className="btn btn-active btn-secondary" onClick={AddMember}>Add Member</button>
      </div>
      <Tabler details={dummyEmployee} />
    </div>
  );
}

export default App;
