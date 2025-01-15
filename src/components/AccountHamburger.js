/*
    Omar Johnson
    AccountHamburger component
    The menu containing account options
    This is on the header
 */
import { Link } from 'react-router-dom';

function AccountHamburger()
{
    return (
        <div className="relative inline-block">
            Account
            { /* Dropdown actions */ }
            <div className="absolute flex right-0 flex-col text-center font-normal bg-gray-100 min-w-80 shadow-md">
                <Link to="/login" className="leading-loose border-b-2 border-gray-200">Login or Sign up</Link>
                <Link to="/login" className="leading-loose border-b-2 border-gray-200">Support</Link>
            </div>
        </div>
    );
}

export default AccountHamburger;

