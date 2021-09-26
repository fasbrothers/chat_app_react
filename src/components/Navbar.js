import React from "react";
import { Grid, Button, Toolbar, AppBar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../util/const";

function Navbar() {
  const user = false;
  return (
    <AppBar className="app" position="static">
      <Toolbar variant="dense">
        <h3>iChat</h3>
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button color="inherit">Quit</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant="outlined">Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
