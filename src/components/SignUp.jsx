import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { common, blue } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, Link } from "react-router-dom";
import { registerUser } from "../services/api";

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

export default function SignUn() {
  const [loading, setLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    registerUser(data, setLoading, setIsDone);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
        {/* Navigation */}
        {isDone && (
          <Navigate to="/" replace={true} />
        )}

        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Créez votre compte maintenant
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Nom"
              name="firstname"
              id="firstname"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Prénom"
              name="lastname"
              id="lastname"
            />

            <TextField
              label="Téléphone"
              required
              id="phone"
              name="phone"
              margin="normal"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+33</InputAdornment>
                ),
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Adresse"
              name="address"
              id="address"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Code Postal"
              name="zip_code"
              id="zip_code"
              type="number"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Ville"
              name="city"
              id="city"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Pays"
              name="country"
              id="country"
            />

            <Button
              fullWidth
              variant="contained"
              component="label"
              color="primary"
              sx={{
                marginTop: 2,
              }}
            >
              Choisir Photo de profile
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                name="profile_picture"
              />
            </Button>

            <Button
                 sx={{
                  marginTop: 2,
                }}
              fullWidth
              variant="contained"
              component="label"
              color="primary"
            >
              Choisir Piece d'identite
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                name="identifical_file"
              />
            </Button>

            {!loading ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
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
                  You have an account? Sign In
                </Link>
              </Grid>
              {/* <Grid item>
                <Link to="/register" className="link">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
