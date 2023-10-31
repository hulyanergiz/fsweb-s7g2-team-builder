import "./App.css";
import { useState } from "react";
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
    </div>
  );
}

export default App;
