import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from './Auth';
import { Annonce } from "./Components/Annonce";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        {/* WE NEED TO WRAP ANNONE IN OUT LAYOUT */}
        <Route path="/annonce" element={<Annonce />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
