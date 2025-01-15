/*
    Omar Johnson
    Header Component
    The header containing the logo and the navigation
    This header is on every single page
 */
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import AccountHamburger from './AccountHamburger';

export function HeaderButton(props)
{
    const style = "w-min bg-gray-50 text-2xl hover:scale-105 transition-all";

    if(props.fakeLink) {
        return <div className={style} onClick={props.customClickEvent}>{props.text}</div>
    }

    return (
        <Link to={props.to} className={style}>{props.text}</Link>
    );
}

function Header()
{
    return (
      <header className="flex flex-row w-full min-h-16 justify-between items-center bg-gray-50 0 p-6 shadow-md">
        <div className="w-1/6">
            <p className="text-3xl">Forge</p>
        </div>
        <nav className="flex flex-row w-1/4 justify-evenly text-2xl font-bold">
            <HeaderButton to="/habits" text="Habits" />
            <HeaderButton to="/support" text="Support" />
            <AccountHamburger />
        </nav>
      </header>
    );
}

export default Header;

