// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';

//Importing JS Files
import Header from './components/Header.js';
import Teams from './components/Teams.js';
import Footer from './components/Footer.js';
import IndividualTeam from './components/IndividualTeam.js';


function App() {

  const data = [
    {
      teamName : "Teams",
      batsman: "Batsman",
      bowler:"Bowler",
      allRounder:"All Rounder"
    },
    {
      teamName : "RCB",
      batsman: "11",
      bowler:"6",
      allRounder:"2"
    },
    {
      teamName : "CSK",
      batsman: "8",
      bowler:"5",
      allRounder:"2"
    },
    {
      teamName : "DC",
      batsman: "10",
      bowler:"6",
      allRounder:"4"
    },
    {
      teamName : "MI",
      batsman: "8",
      bowler:"4",
      allRounder:"2"
    },
  ]

  const rcbTeam = [
    {
      player : "Virat Kohli",
      type: "Batsman"
    },
    {
      player : "Maxwell",
      type: "All Rounder"
    },
    {
      player : "Dupless",
      type: "All ROunder"
    },
    {
      player : "Patidar",
      type: "Batsman"
    },
    {
      player : "Siraj",
      type: "Bowler"
    },
    {
      player:"Rawat",
      type:"Batsman"
     }
  
  ]

  return (
    <div>
      <Header></Header>
      
      <Teams teamName={data[0].teamName} batsman={data[0].batsman} bowler={data[0].bowler} allRounder={data[0].allRounder}></Teams>
      <Teams teamName={data[1].teamName} batsman={data[1].batsman} bowler={data[1].bowler} allRounder={data[1].allRounder}></Teams>
      <Teams teamName={data[2].teamName} batsman={data[2].batsman} bowler={data[2].bowler} allRounder={data[2].allRounder}></Teams>
      <Teams teamName={data[3].teamName} batsman={data[3].batsman} bowler={data[3].bowler} allRounder={data[3].allRounder}></Teams>
      <br/><br/>
      individual Team<br/><br/>
      <IndividualTeam player={rcbTeam[0].player} type={rcbTeam[0].type}></IndividualTeam>
      <IndividualTeam player={rcbTeam[1].player} type={rcbTeam[1].type}></IndividualTeam>
      <IndividualTeam player={rcbTeam[2].player} type={rcbTeam[2].type}></IndividualTeam>
      <IndividualTeam player={rcbTeam[3].player} type={rcbTeam[3].type}></IndividualTeam>
      <IndividualTeam player={rcbTeam[4].player} type={rcbTeam[4].type}></IndividualTeam>
      <IndividualTeam player={rcbTeam[5].player} type={rcbTeam[5].type}></IndividualTeam>
      <Footer></Footer>
    </div>
  );
}

export default App;
