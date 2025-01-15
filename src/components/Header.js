/*
    Omar Johnson
    Header Component
    The header containing the logo and the navigation
    This header is on every single page
 */
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';

function Header()
{
    return (
      <header className="flex flex-row w-full h-32 justify-between items-end bg-blue-100 0 p-6 shadow-md">
        <div className="w-1/6">
            <p className="text-5xl">Forge</p>
        </div>
        <nav className="flex flex-row w-1/4 justify-evenly text-3xl">
            <Link to="/habits">Habits</Link>
            <Link to="/support">Support</Link>
            <Link to="/account"><i className="fa-solid fa-user" /></Link>
        </nav>
      </header>
    );
}

export default Header;

