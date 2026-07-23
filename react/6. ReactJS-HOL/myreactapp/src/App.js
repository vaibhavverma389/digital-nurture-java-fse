import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Home from "./Home";
import Trainerlist from "./Trainerlist";
import TrainerDetails from "./TrainerDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My Academy Trainers App</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/trainers">Show Trainers</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/trainers" element={<Trainerlist />} />

          <Route
            path="/trainer/:id"
            element={<TrainerDetails />}
          />

          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;