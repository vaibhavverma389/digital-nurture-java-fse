import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.length < 5) {
      alert("Full Name must be 5 characters long");
      return;
    }

    if (!(form.email.includes("@") && form.email.includes("."))) {
      alert("Email is not valid");
      return;
    }

    if (form.password.length < 8) {
      alert("Password must be 8 characters long");
      return;
    }

    alert("Valid Form");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "red" }}>Register Here!!!</h2>

      <form onSubmit={handleSubmit}>
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
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

export default Register;