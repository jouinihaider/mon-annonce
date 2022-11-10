import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import CssBaseline from "@mui/material/CssBaseline";
import { common, blue } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, Link } from "react-router-dom";
import { loginUser } from "../services/api";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link className="link" href="https://mui.com/">
        Copyright © Haider Jouini {new Date().getFullYear()}
      </Link>
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: common.white,
    },
    secondary: {
      main: blue[300],
    },
  },
});

export default function ResetPassword() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 0) {
      setStep(1);
    } else {
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {/* Navigation
        {isDone && <Navigate to="/" replace={true} />} */}

        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>?</Avatar>
          <Typography component="h1" variant="h5">
            Récuperer votre mot de passe
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {step === 0 && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            )}

            {step > 0 && (
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Nouveau mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            )}

            {/* Button retour */}
            {step > 0 && (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3}}
                onClick={() => setStep(0)}
              >
                Retour
              </Button>
            )}

            {!loading ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                {step === 0
                  ? "Récupérer mon mot de passe"
                  : "Valider mon nouveau mot de passe"}
              </Button>
            ) : (
              <LoadingButton
                fullWidth
                onClick={() => null}
                loading={loading}
                variant="outlined"
                disabled
              />
            )}

            <Grid container>
              <Grid item xs>
                <Link to="/" className="link">
                  Have an account ? Sign In
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" className="link">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
