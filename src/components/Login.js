/*
    Omar Johnson
    Log in component
    A page for the user to log in to their created account
    After logging in, a session token is retrieved and stored
 */

/* Login form */
import { checkAuth } from "./sessionSlice";
import { Link } from "react-router-dom";

function Login()
{

    // If user is already authenticated, send them to the home page
    if(checkAuth()) {
        return window.location.href = '/';
    }

    return (
        <div className="container-fluid flex flex-col w-full h-3/4 justify-center items-center">

            <form id="login" className="container-fluid flex flex-col w-1/5 min-h-1/2 gap-y-4 justify-center items-center bg-gray-200 rounded-xl shadow-md" action="#">

                <h1 className="text-3xl m-8 ">Log in to your account</h1>

                <div className="container-fluid flex flex-col w-4/6 text-2xl">

                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="username" className="p-2 mb-8 rounded-xl"/>

                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="password" className="p-2 mb-8 rounded-xl" />

                    <label htmlFor="remember" className="text-xl h-4"><input id="remember" type="checkbox" className="inline w-12 h-full" />Remember me next time</label>

                    <button id="submit" type="submit" className="bg-blue-200 hover:bg-blue-300 w-32 h-12 m-8 self-center rounded-md">Log in</button>
                </div>

                <span className="text-xl m-4">New user? <Link to="/register" className="underline text-blue-500">Make an account here</Link></span>

            </form>

        </div>
    );
}

export default Login;

