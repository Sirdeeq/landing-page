import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";

// import { Container } from "reactstrap";
import NewModal from "./NewModal";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "2.5rem",
  },
   subtitle: {
    color: "#fff",
    fontSize: "1rem",

  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <span className={classes.colorText}>EWS.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            <span className={classes.colorText}>Early Warning System(Alert dispatcher).</span>
          </h1>
          <div className={classes.container}>
            <p className={classes.subtitle}>
              An early warning system is a warning system that can be
              implemented as a chain of information communication systems and
              comprises sensors, event detection and decision subsystems for
              early identification of hazards.
            </p>
          </div>
          <Scroll to="" smooth={true}>
            <IconButton>
              {/* <ExpandMoreIcon className={classes.goDown} /> */}
              <NewModal />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
