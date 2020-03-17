import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "@reach/router";

const useStyles = makeStyles(({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: "10px",
    },
    container: {
      display: "flex",
      flexDirection: "row"
    },
    child1:{
      display: "flex",
      alignItems: "end",
      justifyContent: "flex-start",
      width: "60vw"
    },
    child2:{
      display: "flex",
      alignItems: "end",
      justifyContent: "flex-end",
      width: "35vw"
    },
    brownColor:{
      backgroundColor: " #391313",
    }
}));

export default function ToolBarCustom() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.brownColor}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.container}>
              <div className={classes.child1}>
                <Link to="/" style={{ color:"white" ,textDecoration: "none" }}>
                  <Typography variant="h6">
                    Sign Up
                  </Typography>
                </Link>  
              </div>
              <div className={classes.child2}>
                 <Link to="/login" style={{ color:"white", textDecoration: "none" }}>
                   <Button color="inherit">Log In</Button>
                 </Link>
              </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}