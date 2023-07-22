import NewUser from "./NewUser";
import React, { useState } from "react";
import Users from "./Users";

const Dummy_Users = [
  {
    id: "u1",
    name: "Keshav",
    email: "mail1@abc.com",
    phone: "12345678",
  },
  {
    id: "u2",
    name: "Harshita",
    email: "mail2@abc.com",
    phone: "12345678",
  },
];

const Assignment1 = () => {
  const [users, setUsers] = useState(Dummy_Users);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <Users items={users} />
    </div>
  );
};

export default Assignment1;
