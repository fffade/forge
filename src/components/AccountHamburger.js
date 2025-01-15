/*
    Omar Johnson
    AccountHamburger component
    The menu containing account options
    This is on the header

    Provides a few options
    - LOGGED IN: PROFILE, SETTINGS, LOG OUT
    - NOT LOGGED IN: LOG IN/SIGN UP
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './accountHamburgerSlice';
import { HeaderButton } from './Header';


function DropdownOption(props)
{
    return (
        <Link to={props.to} className="leading-loose border-b-2 border-gray-200 hover:bg-gray-200">{props.text}</Link>
    );
}

function AccountHamburger()
{
    const isOpen = useSelector((state) => state.accountHamburger.isOpen); // Retrieve open value or not

    const dispatch = useDispatch();

    // Use open state to determine if options are visible
    const dropdownActions = isOpen ?
        (<div className="absolute flex right-0 top-20 flex-col text-center font-normal bg-gray-100 min-w-80 shadow-md">
            <DropdownOption to="/login" text="Log in or Sign up" />
            <DropdownOption to="/faq" text="FAQ" />
        </div>)
        :
        '';

    return (
        <React.Fragment>
            <HeaderButton fakeLink={true} customClickEvent={() => dispatch(toggle())} text="Account" className="relative inline-block" />
            {dropdownActions}
        </React.Fragment>
    );
}

export default AccountHamburger;

