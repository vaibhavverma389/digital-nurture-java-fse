import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList() {
  const employees = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];

  return (
    <div>
      <h2>Employees List</h2>
      {employees.map(emp => (
        <EmployeeCard key={emp.id} name={emp.name} />
      ))}
    </div>
  );
}

export default EmployeesList;
