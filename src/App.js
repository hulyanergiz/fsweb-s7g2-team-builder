import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [memberList, setMemberList] = useState([]);

  const addMember = (member) => {
    const currentMemberList = [...memberList, member];
    setMemberList(currentMemberList);
  };
  return (
    <div className="App">
      <Form addMember={addMember} />
      <h2>Member List</h2>
      <ul>
        {memberList.map((member, idx) => (
          <li key={idx}>
            {member.isim},<a href={`mailto:${member.email}`}>{member.email}</a>,
            {member.rol}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
