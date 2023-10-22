const ListMembers = (props) => {
  return (
    <>
      <h3>Team List</h3>
      <ul>
        {props.teamList.map((member) => {
          return (
            <li>
              <a href={`mailto:${member.email}`}>{member.isim}</a>,({member.rol}
              )
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ListMembers;
