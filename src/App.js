import { BrowserRouter, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from './Auth';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
