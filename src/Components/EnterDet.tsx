import React, { useState } from "react";
import "./tabler.tsx";
import { IEmployee } from "./Employeetype.ts";
import './EnterDet.css';

type props={
    onsubmitcli:(data:IEmployee)=>void
    
}

const EnterDet = (props: props) => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState(0);

  const {onsubmitcli}=props;

  const onchangename=(e:any)=>{
    SetName(e.target.value);
  }

  const onchangeemail=(e:any)=>{
    SetEmail(e.target.value);
    console.log(email);
  }
  const onchangephone=(e:any)=>{
    SetPhone(e.target.value);
  }

  const onsubmitbutton=(e:any)=>{
    e.preventDefault();
    const data:IEmployee={
        id:new Date().toJSON.toString(),
        name:name,
        email:email,
        phone:phone,
    };
    onsubmitcli(data);
  };

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <button className="btn btn-ghost text-xl">Add Member</button>
      </div>
      <form onSubmit={onsubmitbutton}>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          value={name}
          className="grow"
          placeholder="Username"
          onChange={onchangename}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" onChange={onchangeemail} value={email} className="grow" placeholder="Email" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <input
          type="number"
          value={phone}
          className="grow"
          placeholder="Phonenumber"
          onChange={onchangephone}
        />
      </label>

      <div className="butt">
        <button className="btn btn-active btn-secondary ">View List</button>
        <input type="submit" className="btn btn-primary text-xl" value="Add Employee"/>
      </div>
      </form>
    </div>
  );
};
export default EnterDet;
