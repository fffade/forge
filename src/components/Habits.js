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
import { useQuery } from '@tanstack/react-query';
import { checkAuth, requireAuthRedirect } from './session';
import { getHabits } from "./api";

/* Habits page */
function Habits()
{
    // Must be logged in to view habits
    requireAuthRedirect();

    // Query habit data from the API
    const { data, error, isPending, isFetching } = useQuery({
        queryKey: ['habits'],
        queryFn: getHabits.bind(null, 1)
    });

    if(isPending)
        return (<p>Pending...</p>);

    // Use fetched data to display each habit as its own component
    const displayHabits = () => {

        // No habits found
        if(!data || data.length <= 0)
            return (<p>No habits</p>);

        return data.map((item) => <p>{item.description}</p>);
    };

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

                <div className="flex flex-col justify-start">
                    {displayHabits()}
                </div>

            </div>

            { /* Daily goals grid cell */ }
            <div className="container-fluid flex flex-col w-full">

                <h2 className="text-3xl text-neutral-500 uppercase font-bold">Goals</h2>

            </div>

        </div>
    );
}

export default Habits;

