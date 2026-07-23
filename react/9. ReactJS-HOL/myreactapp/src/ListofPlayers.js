import React from "react";

const players = [
  { name: "Rahul", score: 95 },
  { name: "Virat", score: 100 },
  { name: "Rohit", score: 80 },
  { name: "Gill", score: 65 },
  { name: "Hardik", score: 72 },
  { name: "Surya", score: 60 },
  { name: "Pant", score: 90 },
  { name: "Jaiswal", score: 50 },
  { name: "Iyer", score: 68 },
  { name: "KL Rahul", score: 77 },
  { name: "Jadeja", score: 85 }
];

export default function ListofPlayers() {
  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const ScoreBelow70 = () => {
  const lowScore = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {lowScore.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};