/*
    Omar Johnson
    HomePage component
    The main page that users see when they hit index

    If not logged in, here users are prompted to log in
    If logged in, users see a welcome message and a number of habits
 */
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';


function HomePageUnauthenticated()
{
    return (
        <div className="container-fluid flex flex-col w-full h-full gap-y-8 justify-center items-center">

            <h2 className="text-6xl">Welcome to Forge!</h2>

            <h3 className="text-2xl">Unlock Your Potential: The Fun Way to Build Habits</h3>

            <div className="flex flex-col justify-center w-1/3 p-8 gap-y-10 text-3xl text-left text-black">
                <span>
                    <h3 className="font-bold uppercase text-2xl text-gray-600">Create and track your goals</h3>
                    Easily add habits like exercise, healthy eating, reading, and more.
                </span>
                <span>
                    <h3 className="font-bold uppercase text-2xl text-gray-600">Feel Rewarded</h3>
                    Earn points, exclusive cosmetics, unlock achievements, and compete with your family and friends to stay motivated.
                </span>
                <span>
                    <h3 className="font-bold uppercase text-2xl text-gray-600">Visualize your Success</h3>
                    Track your progress with motivating charts and graphics.
                    Stay on track with reminders: Never forget your goals with customizable reminders.
                </span>

                <span className="text-2xl text-center m-4">
                    With Forge, building habits is an engaging experience.<br />
                    What are you waiting for?
                </span>

                { /* Sign up area */ }
                <span className="flex flex-col self-center">
                    <button className="m-4 h-20 bg-blue-300 hover:bg-blue-400 text-3xl rounded-xl">Sign Up</button>
                    <a className="text-xl text-gray-400" href="/login">or <u>login</u> to your existing account</a>
                </span>
            </div>
        </div>
    );
}

function HomePage()
{
    return HomePageUnauthenticated();

    return (
        <div className="container-fluid flex flex-col w-full h-3/4 gap-y-16 justify-center items-center">

            <h2 className="text-5xl">"This is a motivational quote!"</h2>

            <p className="text-3xl">{0} habits remaining today</p>

            <button className="block text-3xl h-20 pl-12 pr-12 bg-gray-800 text-amber-300 rounded-md">View My Habits</button>
        </div>
    );
}

export default HomePage;

