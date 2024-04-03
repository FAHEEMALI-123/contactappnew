import React, { useState } from "react";
import Tabler from "./tabler.tsx";
import './App.css';
import  {IEmployee, dummyEmployee} from './Employeetype.ts';
import EnterDet from "./EnterDet.tsx";


function App() {
  const [employeedet, setEmployeedet] = useState<IEmployee[]>(dummyEmployee);
  const[viewpage,SetViewpage]=useState<String>("table");



  const AddMember=()=>{
    SetViewpage("form");
  }
  const ShowListpage=()=>{
    SetViewpage("table");
  }

  const AddEmployee=(data:IEmployee)=>{
    setEmployeedet([...employeedet,data]);
    console.log(setEmployeedet);
  }

  return (
    <div>
      {
      viewpage==="table" ?
      (
        <div>
      <div className="navbar bg-primary text-primary-content">
      <button className="btn btn-ghost text-xl">ContactAPP</button>
      <button className="btn btn-active btn-secondary" onClick={AddMember}>Add Member</button>
      
      </div>
      <Tabler details={dummyEmployee} />
      </div>
     
    ):
    (<EnterDet onsubmitcli={AddEmployee}/>)
       }
    </div>
  );
    }


export default App;
