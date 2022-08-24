import './App.css';
import React from 'react';
import { useState } from 'react';
import TeamCard from './components/Title/TeamCard/teamCard';

const DATA = [
  "Prva recenica",
  "Druga recenica",
  "Treca recenica",
  "Cetvrta recenica",
  "...",
  "Stota recenica",
];
const favoriteTeams = [
  {id: 0, name:"Arsenal", points: 6},
  {id: 1, name:"Man.City", points: 4},
  {id: 2, name:"Man.United", points: 2},
  {id: 3, name:"Liverpool", points: 5},
  {id: 4, name:"Pazar", points: 9},
  {id: 5, name: "Partizan", points: 8},
];
export default function App() {
  const [teams, setTeams] = useState(favoriteTeams);
  const deleteTeam = (id) => {
    const newTeams = teams.filter((team) => team.id !== id);
    setTeams(newTeams);
  }

    // const [array, setArray] = useState(DATA);
    // const generateNewWord = () => Math.random().toString(36).slice(2, 7);
    // const reverseArray = () => {
    //   const _array = [...array]
    //   const reversed = _array.reverse();
    //   setArray(reversed);
    // }

    
    
    
    
    return (
      <div className="card-container">
       {/* <h4>Recenice iz niza:</h4>
      <button onClick ={() => setArray((prev) => [generateNewWord(),...prev])}>
        Dodaj random recenicu
      </button>
      <button onClick ={reverseArray}>Reverse recenica</button>
      <ul>
        {array.map((el) => (
         <li key={el}>{el}</li>
        ))}
        </ul> */}
        <button onClick={() =>
        setTeams((prev) => [
          ...prev,
          {
            id: Math.random(),
            name:"Novi Tim",
            points: 4,
          }
        ])
        }>Dodaj novi tim</button>
        {teams.map((team) => (
          <div key={team.id}>
            <TeamCard name={team.name}
            points={team.points}
            onDeleteTeam={() => deleteTeam(team.id)} />
          </div>
        ))}
  </div>
  )
} 
