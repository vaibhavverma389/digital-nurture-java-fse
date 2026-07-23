import React, { useState } from "react";

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const referenceId = Math.floor(Math.random() * 1000) + 1;

    alert(
      `Thanks ${employeeName}\nYour Complaint was submitted successfully.\nReference ID: ${referenceId}`
    );

    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "red" }}>Register your complaints here!!!</h2>

      <form onSubmit={handleSubmit}>
        <table
          style={{
            margin: "auto",
            borderSpacing: "10px"
          }}
        >
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Complaint:</td>
              <td>
                <textarea
                  rows="4"
                  cols="20"
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                  required
                />
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ComplaintRegister;