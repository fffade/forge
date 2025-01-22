/*
    Omar Johnson
    Habits Component
    The main page for users to go to view their habits and manage them

    On this page is a list of habits, a progress chart, and their daily goals

    Future: Leaderboard and more!
 */
import {Routes, Route, useNavigate} from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {checkAuth, requireAuthRedirect} from './sessionSlice';

/* Habits page */
function Habits()
{
    // Must be logged in to view habits
    requireAuthRedirect();

    return (
        <div className="container-fluid grid grid-cols-3 grid-rows-1 w-3/4 h-3/4 p-16 gap-y-16 gap-x-40 self-center justify-center items-start">

            { /* Progress grid cell */ }
            <div className="container-fluid flex flex-col w-full">

                <h2 className="text-3xl text-neutral-500 uppercase font-bold">Progress</h2>

            </div>

            { /* Habits grid cell */ }
            <div className="container-fluid flex flex-col w-full">

                { /* Top bar of habits with controls buttons */ }
                <span className="flex flex-row justify-between">
                    <h2 className="text-3xl text-neutral-500 uppercase font-bold">Habits</h2>
                    <button className="text-2xl text-neutral-400">New <i className="text-2xl fa-solid fa-plus"/></button>
                </span>

            </div>

            { /* Daily goals grid cell */ }
            <div className="container-fluid flex flex-col w-full">

                <h2 className="text-3xl text-neutral-500 uppercase font-bold">Goals</h2>

            </div>
        </div>
    );
}

export default Habits;

