import React from 'react';

function CohortDetails(props) {
  const { cohortCode, status, details } = props.cohort;
  return (
    <div>
      <h3>{cohortCode}</h3>
      <p>Status: {status}</p>
      <p>Details: {details}</p>
    </div>
  );
}

export default CohortDetails;
