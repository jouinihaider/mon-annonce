import axios from "axios";
import { registration_endpoint, login_endpoint, allusers_endpoint } from "./endpoints";

const registerUser = async (data, setLoading, setIsDone) => {
  setLoading(true);

  // L'attribut identifical_file ne doit pas etre vide dans SQL
  // data.append("identifical_file", data.get("profile_picture"));

  await axios({
    method: "post",
    url: registration_endpoint,
    data: data,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (res) {
      //handle success
      console.log("Registration Response", res.data);
      setLoading(false);
      setIsDone(true);
      alert("Votre compte a été créer avec succéss, vous pouvez se connecter en utilisant votre adresse et mot de passe !");
    })
    .catch(function (err) {
      //handle error
      console.log("Registration Error", err.response);
      setLoading(false);
      setIsDone(false);
      alert("Vous etes déja inscrit !");
    });
};

const getAllUsers = async (data, token, setUserLogged, setLoading) => {

  let user_email = data.get("email");

  await axios({
    method: "get",
    url: allusers_endpoint,
    headers: { "Authorization": `Bearer ${token}` },
  })
    .then(function (res) {
      console.log("Get All Users Response", res.data);
      setLoading(false);
      // Locate my user:
      let found = res.data.filter((e) => e.email === user_email);

      if(found) {
        console.log("Its my user", found);
        localStorage.setItem('@user_logged', JSON.stringify(found[0]));
        setUserLogged(true);
      } else {
        setUserLogged(false);
        alert("Merci de s'inscrire !");
      }

    })
    .catch(function (err) {
      console.log("Get All Users Error", err.response);
      setLoading(false);
      //handle error
    });
};

const loginUser = async (data, setUserLogged, setLoading) => {
  setLoading(true);

  await axios({
    method: "post",
    url: login_endpoint,
    data: data,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })
    .then(function (res) {
      console.log("Login Response", res.data.token.token);
      //Save Token
      localStorage.setItem("@user_token", JSON.stringify(res.data.token.token));

      getAllUsers(data, res.data.token.token, setUserLogged, setLoading);
      setLoading(false);
    })
    .catch(function (err) {
      console.log("Login Error", err.response);
      setLoading(false);
      setUserLogged(false);
      //handle error
    });
};

export { registerUser, loginUser };
