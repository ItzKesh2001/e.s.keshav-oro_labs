import React from "react";
import UserForm from "./UserForm";

export default function NewUser() {
  const saveUserInfoHandler = (enteredUserInfo) => {
    const userData = {
      ...enteredUserInfo,
      id: Math.random().toString(),
    };
  };

  return (
    <div>
      <UserForm onSaveUserInfo={saveUserInfoHandler} />
    </div>
  );
}
