import Form from "./components/Form";
import Home from "./components/Home";
import React, { useState } from "react";
import Users from "./components/Users";
import Layout from "./layout/Layout";
import { Route } from "react-router-dom";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, surname) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: name, surname: surname, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Layout />
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/form">
          <Form onAddUser={addUserHandler} />
        </Route>
        <Route path="/users">
          <Users users={usersList} />
        </Route>
      </main>
    </div>
  );
}

export default App;

// <Route path="/" exact>
//   <Form onAddUser={addUserHandler} />
// </Route>;
// <Route path="/users-list">
//   <Users users={usersList} />
// </Route>;
