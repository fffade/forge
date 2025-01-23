/*
    Omar Johnson
    AccountHamburger component
    The menu containing account options
    This is on the header

    Provides a few options
    - LOGGED IN: PROFILE, SETTINGS, LOG OUT
    - NOT LOGGED IN: LOG IN/SIGN UP
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderButton } from './Header';
import { checkAuth } from './session';


function DropdownOption(props)
{
    return (
        <Link to={props.to} className="leading-loose border-b-2 border-blue-100 hover:bg-blue-100">{props.text}</Link>
    );
}
function AccountHamburger()
{
    const [isOpen, setIsOpen] = useState(false);

    const auth = checkAuth(); // Determine whether logged in

    const loggedInOptions = (<React.Fragment>
            <DropdownOption to="/profile" text="Profile" />
            <DropdownOption to="/settings" text="Settings" />
            <DropdownOption to="/logout" text="Sign out" />
        </React.Fragment>
    );

    const notLoggedInOptions = (<React.Fragment>
        <DropdownOption to="/login" text="Log in or Sign up" />
        <DropdownOption to="/faq" text="FAQ" />
    </React.Fragment>
    );

    const toggle = () => {
        setIsOpen((state) => !state);
    };

    const close = () => {
      setIsOpen(() => false);
    };

    const dropdownActions = isOpen ? (
            (<div onClick={close} className="absolute flex right-0 top-20 flex-col text-center font-normal bg-blue-50 min-w-80 shadow-md">
                {auth ? loggedInOptions : notLoggedInOptions}
            </div>)
        ) : '';


    return (
        <React.Fragment>
            <HeaderButton fakeLink={true} customClickEvent={() => toggle()} text="Account" className="relative inline-block" />
            {dropdownActions}
        </React.Fragment>
    );
}

export default AccountHamburger;

