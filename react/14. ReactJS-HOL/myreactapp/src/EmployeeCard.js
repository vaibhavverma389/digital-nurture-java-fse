import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard(props) {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h4>{props.name}</h4>
      <button className={theme}>Action Button</button>
    </div>
  );
}

export default EmployeeCard;
