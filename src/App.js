import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ListMembers from "./components/ListMembers";
import Form from "./components/Form";

function App() {
  const [teamList, setTeamList] = useState([]);
  const addMember = (member) => {
    const newTeamList = [...teamList, member];
    setTeamList(newTeamList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img width="80px" src={logo} className="App-logo" alt="logo" />
        {teamList.length === 0 ? (
          <div>No data to show</div>
        ) : (
          <ListMembers teamList={teamList} />
        )}
        <Form addMember={addMember} />
      </header>
    </div>
  );
}

export default App;
