import React, { useEffect, useState } from "react";

const Form = (props) => {
  const initialState = { isim: "", email: "", rol: "" };
  const { addMember, editMemberFn, editMember } = props;
  const [member, setMember] = useState(editMember || initialState);
  useEffect(() => {
    if (editMember) {
      setMember(editMember);
    }
  }, [editMember]);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newMemberState = { ...member, [name]: value };
    setMember(newMemberState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editMember) {
      editMemberFn(member);
    } else {
      addMember(member);
    }
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
        {editMember ? (
          <button type="submit">Güncelle</button>
        ) : (
          <button type="submit">Ekle</button>
        )}
      </form>
    </>
  );
};
export default Form;
