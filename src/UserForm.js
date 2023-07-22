import React, { useState } from "react";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
    };

    props.onSaveUserInfo(userData);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhone("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={enteredEmail} onChange={emailChangeHandler} />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" value={enteredPhone} onChange={phoneChangeHandler} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
