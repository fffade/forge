/*
    Omar Johnson
    Support component
    A page dedicated to new users with a contact form and a link to the FAQ
    Users do not need to be logged in on this page
 */
import { requireAuthRedirect } from "./sessionSlice";

/* Support page */
function Support()
{
    requireAuthRedirect();

    return (
        <div className="container-fluid flex flex-col w-full h-3/4 gap-y-16 justify-center items-center">

            <h2 className="text-5xl">"This is a motivational quote!"</h2>

            <p className="text-3xl">{0} habits remaining today</p>

            <button className="block text-3xl h-20 pl-12 pr-12 bg-gray-800 text-amber-300 rounded-md">View My Habits</button>
        </div>
    );
}

export default Support;

