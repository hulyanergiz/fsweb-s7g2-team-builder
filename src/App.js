import "./App.css";
import { useState } from "react";

function App() {
  const [memberList, setMemberList] = useState([]);

  const addMember = (member) => {
    const currentMemberList = [...memberList, member];
    setMemberList(currentMemberList);
  };
  return <div className="App"></div>;
}

export default App;
