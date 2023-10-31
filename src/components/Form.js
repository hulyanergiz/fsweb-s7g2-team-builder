import { useState } from "react";

const Form = (props) => {
  const [member, setMember] = useState({
    isim: "",
    email: "",
    rol: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newMemberState = { ...member, [name]: value };
    setMember(newMemberState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addMember(member);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          İsim:
          <input
            name="isim"
            value={member.isim}
            onChange={(e) => changeHandler(e)}
          />
        </label>
        <label>
          <input
            name="email"
            value={member.email}
            onChange={(e) => changeHandler(e)}
          />
        </label>
        <label>
          <input
            name="rol"
            value={member.rol}
            onChange={(e) => changeHandler(e)}
          />
        </label>
        <button type="submit">Ekle</button>
      </form>
    </>
  );
};
export default Form;
