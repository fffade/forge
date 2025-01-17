/*
    Omar Johnson
    Log Out component
    A page navigated to when a user wants to log out
 */
import { checkAuth, deleteAuth } from "./sessionSlice";
import { useNavigate } from "react-router";

/* Log out page */
function Logout()
{

    // If there is no authentication, just return to login page
    if(!checkAuth()) {
        return window.location.href = '/login';
    }

    deleteAuth(); // Clear auth token

    return (
        <div className="container-fluid flex flex-col w-full h-3/4 justify-center items-center">

            <p className="text-2xl">You have successfully logged out of your account.</p>

        </div>
    );
}

export default Logout;

