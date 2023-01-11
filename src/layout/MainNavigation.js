import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Users Management</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Add Users</Link>
          </li>
          <li>
            <Link to="/users">Users List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
