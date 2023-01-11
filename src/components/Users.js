import classes from "./Users.module.css";

const Users = (props) => {

  return (
    <div className={classes.card}>
      <p className={classes.header}></p>
      <h1 className={classes.h3users}>Users</h1>
      <ul className={classes.ul}>
        {props.users.map((user) => (
          <li
            key={user.id}
            className={classes.li}
          >{`${user.name} ${user.surname}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
