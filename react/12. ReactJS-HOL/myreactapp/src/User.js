import React from 'react';

function User(props) {
  return (
    <div>
      <h2>Book Tickets</h2>
      <p>Select your seats and confirm booking.</p>
      <button onClick={props.onLogout}>Logout</button>
    </div>
  );
}

export default User;
