import { Button, makeStyles } from "@material-ui/core";
import "./Assets/Sass/App.scss";
import Image from "./Assets/Images/hello.png";
const useStyles = makeStyles((themes) => ({
  app: {
    backgroundColor: themes.palette.grey[900],
    height: "100vh",
  },
  button: {
    backgroundColor: themes.palette.primary.main,
    padding: themes.spacing(3),
    margin: "auto",
  },
  divb: {
    display: "flex",
    justifyContent: "center",
  },
  divi: {
    display: "flex",
    justifyContent: "center",
  },
  head: {
    textAlign: "center",
    color: "white",
    padding: themes.spacing(3),
  },
}));
function App() {
  const classes = useStyles();
  return (
    <>
      <div container className={classes.app}>
        <div className={classes.divi}>
          <img src={Image} alt="logo"></img>
        </div>
        <div className={classes.divb}>
          <Button
            variant="contained"
            className={classes.button}
            href="https://discord.gg/cP6eFjvSHU"
            target="_blank"
          >
            Join Discord Community Server
          </Button>
        </div>
        <h3 className={classes.head}>Site Under Contruction</h3>
      </div>
    </>
  );
}

export default App;
