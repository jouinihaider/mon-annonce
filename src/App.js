import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';


import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import ResetPassword from './components/ResetPassword';

import Colle from './components/Colle';
import Accueil from './components/Accueil';
import Offer from './components/Offer';


function App() {
  return (
    <div className="App">
      {/* <div className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route>
              <Route path="/" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/resetpassword" element={<ResetPassword />} />

              <Route path="/accueil" element={<Accueil />} />
              <Route path="/offer/:offerId" element={<Offer />} />
              <Route path="/offers" element={<Colle/>} />

            </Route>
          </Routes>
        </BrowserRouter>
      {/* </div> */}
    </div>
  );
}

export default App;
