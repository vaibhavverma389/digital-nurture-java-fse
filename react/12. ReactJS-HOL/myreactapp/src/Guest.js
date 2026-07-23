import React from 'react';

function Guest(props) {
  return (
    <div>
      <h2>Flight Details</h2>
      <p>Flight 101: Delhi to Mumbai - 10:00 AM</p>
      <button onClick={props.onLogin}>Login</button>
    </div>
  );
}

export default Guest;
