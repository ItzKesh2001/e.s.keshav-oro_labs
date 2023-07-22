const UserInfo = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
};

export default UserInfo;
