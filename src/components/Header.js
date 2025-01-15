/*
    Omar Johnson
    Header Component
    The header containing the logo and the navigation
    This header is on every single page
 */
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import AccountHamburger from './AccountHamburger';

function Header()
{
    return (
      <header className="flex flex-row w-full h-min justify-between items-center bg-gray-50 0 p-6 shadow-md">
        <div className="w-1/6">
            <p className="text-3xl">Forge</p>
        </div>
        <nav className="flex flex-row w-1/4 justify-evenly text-2xl font-bold">
            <Link to="/habits">Habits</Link>
            <Link to="/support">Support</Link>
            <AccountHamburger />
        </nav>
      </header>
    );
}

export default Header;

