import { Container, Grid, Box, Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../index";
import firebase from "firebase";

function Login() {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopUp(provider);
    console.log(user);
  };
  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justify={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          style={{ width: 400, backgroundColor: "lightgray" }}
          container
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box p={5}>
            <Button onClick={login} variant="outlined">
              Log In With Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
