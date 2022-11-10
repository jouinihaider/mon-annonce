import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import { Navigate } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("@user_logged"));
  const [logged, setLogged] = useState(true);

  const logout = () => {
    localStorage.removeItem('@user_logged');
    setLogged(false);
  };

  console.log('user.profile_picture == ', user)
  return (
    <div>
      {/* Navigation */}
      {!logged && <Navigate to="/" replace={true} />}

      {user 
      ?
      <Card sx={{ minWidth: 400 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[300] }} aria-label="recipe">
              {`${user.firstname[0].toUpperCase()}${user.lastname[0].toUpperCase()}`}
            </Avatar>
          }
          title={`${user.firstname.toUpperCase()} ${user.lastname.toUpperCase()}`}
          subheader={`${user.city}, ${user.country}`}
        />

        <CardMedia
          component="img"
          height="200"
          width="200"
          image={`http://127.0.0.1:3333/uploads/${user.profile_picture}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            id: {user.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            phone: {user.phone}
          </Typography>
        </CardContent>
      </Card>
      : null
      }

      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => logout()}
      >
        Déconnexion
      </Button>
    </div>
  );
};

export default Home;
