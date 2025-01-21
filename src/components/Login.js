/*
    Omar Johnson
    Log in component
    A page for the user to log in to their created account
    After logging in, a session token is retrieved and stored
 */

/* Login form */
import { authorizeCredentials, checkAuth } from "./sessionSlice";
import { Link, useSearchParams } from "react-router-dom";

function Login()
{

    const [searchParams, setSearchParams] = useSearchParams();

    const showBadLoginMessage = () =>
    {
        setSearchParams({...searchParams, bad_login: 1});
    };

    const handleSubmit = (event) =>
    {
        event.preventDefault();

        console.log(`Attempting login`);

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // If this authorization is successful, then access token is good, so reload
        authorizeCredentials(username, password).then((isSuccess) => {
            // On good login, send user to home page
            // On bad login, return error message
            if(isSuccess) {
                console.log(`Successful login`)
                return window.location.reload();
            }

            showBadLoginMessage();
        });
    };

    // If user is already authenticated, send them to the home page
    if(checkAuth()) {
        return window.location.href = '/';
    }


    return (
        <div className="container-fluid flex flex-col w-full h-3/4 justify-center items-center">

            <form id="login" className="container-fluid flex flex-col w-1/5 min-h-1/2 p-8 justify-center items-center bg-gray-200 rounded-xl shadow-md" onSubmit={handleSubmit}>

                <h1 className="text-3xl m-4">Log in to your account</h1>

                <div className="container-fluid flex flex-col items-center w-4/6 text-2xl">

                    <label htmlFor="username" className="w-full m-4">Username
                        <input id="username" type="text" name="username" placeholder="username" className="p-2 w-full rounded-xl"/>
                    </label>


                    <label htmlFor="password" className="w-full m-4">Password
                        <input id="password" type="password" name="password" placeholder="password" className="p-2 w-full rounded-xl" />
                    </label>


                    <label htmlFor="remember" className="text-xl h-4">Remember me next time
                        <input id="remember" type="checkbox" className="inline w-12 h-full" />
                    </label>

                    <button id="submit" type="submit" className="bg-blue-200 hover:bg-blue-300 w-32 h-12 m-8 self-center rounded-md">Log in</button>

                    <span className={`text-lg m-2 text-red-600 text-center ${searchParams.get('bad_login') ? 'visible' : 'invisible'}`}>Incorrect username or password, try again</span>
                </div>

                <span className="text-xl m-8">New user? <Link to="/register" className="underline text-blue-500">Make an account here</Link></span>

            </form>

        </div>
    );
}

export default Login;

