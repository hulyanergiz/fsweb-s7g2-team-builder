import React, { useState } from "react";

const Form = (props) => {
  const [member, setMember] = useState({ isim: "", email: "", rol: "" });

  const handleChange = (e) => {
    const newMember = { ...member, [e.target.name]: e.target.value };
    setMember(newMember);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMember(member);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          İsim:
          <input
            name="isim"
            value={member.isim}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <label>
          Email:
          <input
            name="email"
            value={member.email}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <label>
          Rol:
          <input
            name="rol"
            value={member.rol}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <button type="submit">Ekle</button>
      </form>
    </>
  );
};
export default Form;
