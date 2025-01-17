/*
  Omar Johnson
  App Component
  The main app wrapper for the site
*/
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router";
import Header from './components/Header';
import HomePage from './components/HomePage';
import Support from './components/Support';
import Logout from './components/Logout';
import Login from "./components/Login";

function App() {
  return (
    <div className="container-fluid flex flex-col bg-gray-100 w-screen h-screen">
        <Header />

        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/support" element={<Support />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
