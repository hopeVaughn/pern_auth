import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
//components
import { Dashboard, Login, Register } from "./components";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
