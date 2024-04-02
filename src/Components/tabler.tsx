import React from "react";
import { IEmployee } from "./Employeetype.ts";

type props = {
  details: IEmployee[];
};

const Tabler = (props: props) => {
  const details = props.details;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {details.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-warning">Delete</button>
                  </td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Tabler;
