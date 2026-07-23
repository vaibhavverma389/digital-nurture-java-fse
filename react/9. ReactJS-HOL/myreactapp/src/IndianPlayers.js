import React from "react";

const IndianTeam = [
  "Sachin",
  "Dhoni",
  "Virat",
  "Rohit",
  "Yuvraj",
  "Raina"
];

export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <p>First : {first}</p>
      <p>Third : {third}</p>
      <p>Fifth : {fifth}</p>
    </div>
  );
}

export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <p>Second : {second}</p>
      <p>Fourth : {fourth}</p>
      <p>Sixth : {sixth}</p>
    </div>
  );
}

const T20Players = ["Gill", "Surya", "Hardik"];
const RanjiPlayers = ["Pujara", "Rahane", "Jadeja"];

export const IndianPlayers = [...T20Players, ...RanjiPlayers];

export function ListofIndianPlayers() {
  return (
    <ul>
      {IndianPlayers.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
}

export { IndianTeam };