import UserInfo from "./UserInfo";

const Users = (props) => {
  return (
    <div>
      <UserInfo user={props.items[0]} />
      <UserInfo user={props.items[1]} />
    </div>
  );
};

export default Users;
