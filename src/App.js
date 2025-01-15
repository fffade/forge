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

function App() {
  return (
    <div className="container-fluid flex flex-col bg-gray-100 w-screen h-screen">
        <Header />

        <Routes>
            <Route exact path="/" element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
