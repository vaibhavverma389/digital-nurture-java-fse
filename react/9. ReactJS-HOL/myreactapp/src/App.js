import React from "react";
import ListofPlayers, { ScoreBelow70 } from "./ListofPlayers";
import {
  OddPlayers,
  EvenPlayers,
  ListofIndianPlayers,
  IndianTeam,
} from "./IndianPlayers";

function App() {
  const flag = true; // false karke second output dekh sakte ho

  if (flag) {
    return (
      <div>
        <ListofPlayers />
        <hr />
        <ScoreBelow70 />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Indian Team</h2>

        <h3>Odd Players</h3>
        {OddPlayers(IndianTeam)}

        <hr />

        <h3>Even Players</h3>
        {EvenPlayers(IndianTeam)}

        <hr />

        <h3>List of Indian Players Merged</h3>
        <ListofIndianPlayers />
      </div>
    );
  }
}

export default App;