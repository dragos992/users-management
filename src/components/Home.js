import classes from "./Home.module.css"

const Home = (props) => {
    return (
      <div className={classes.card}>
        <p className={classes.header}></p>
        <h1 className={classes.pres}>A management tool for the users in your organization!</h1>
      </div>
    );
}

export default Home;