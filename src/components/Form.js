import { useState, useEffect } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [usersList, setUsersList] = useState([]);

  let currState = usersList;

  useEffect(() => {
   const currState = JSON.parse(localStorage.getItem("name")) || [];
   if(currState) {
    setUsersList(currState)
   };
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    let person = {
      name: name,
      surname: surname,
    };

    currState.push(person);

    setName("");
    setSurname("");

    setUsersList(currState);
    props.onAddUser(name, surname);
    localStorage.setItem("name", JSON.stringify(currState));
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const surnameChangeHandler = (event) => {
    setSurname(event.target.value);
  };

  return (
    <div>
      <form className={classes.card} onSubmit={onSubmit}>
        <p className={classes.header}></p>
        <div className={classes.inner}>
          <h1 className={classes.h1}>Applications</h1>
          <h3 className={classes.h3}>Name:</h3>
          <input
            className={classes.input}
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={nameChangeHandler}
          ></input>
          <h3 className={classes.h3}>Surname:</h3>
          <input
            className={classes.input}
            id="surname"
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={surnameChangeHandler}
          ></input>
          <button className={classes.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
