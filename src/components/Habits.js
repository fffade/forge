/*
    Omar Johnson
    Habits Component
    The main page for users to go to view their habits and manage them

    On this page is a list of habits, a progress chart, and their daily goals

    Future: Leaderboard and more!
 */
import { useQuery } from '@tanstack/react-query';
import { requireAuthRedirect } from './session';
import { getHabits } from "./api";

/* Single habit on the list */
function Habit(props)
{
    const data = props.data;

    // For MIN and MAX goals, specify numbers
    let minMax = '';
    if(data.type === 'MIN' || data.type === 'MAX') {
        minMax = `${data.currentNumber} / ${data.targetNumber}`;
    }

    // For DOs and DON'Ts, show an x or a check based on status of fulfillment
    let fail = <i className="text-3xl fa-solid fa-circle-notch" />;
    if(data.type === 'DO') {
        fail = <i className={`text-3xl fa-regular ${data.isDone ? 'fa-circle-check' : 'fa-circle-xmark'}`} />;
    } else if(data.type === 'DNT') {
        fail = <i className={`text-3xl fa-regular ${data.isDone ? 'fa-circle-xmark' : 'fa-circle-check'}`} />;
    }

    // For MIN, check off if reached, for MAX, check off if under limit
    else if(data.type === 'MIN' && data.currentNumber >= data.targetNumber) {
        fail = <i className={`text-3xl fa-regular fa-circle-check`} />;
    }

    return (
        <div className="flex flex-row justify-between p-4 bg-gray-300 bg-opacity-0 hover:bg-opacity-10">
            <p className="text-2xl">{data.description}</p>
            <span className="inline-flex gap-x-8">
                <p className="text-3xl">{minMax}</p>
                {fail}
            </span>
        </div>
    );
}

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

        return data.map((item) => <Habit data={item} />);
    };

    return (
        <div className="container-fluid grid grid-cols-3 grid-rows-1 w-4/5 h-3/4 p-16 gap-y-16 gap-x-40 self-center justify-center items-start">

            { /* Progress grid cell */ }
            <div className="container-fluid flex flex-col w-full">

                <h2 className="text-3xl text-neutral-500 uppercase font-bold">Progress</h2>

            </div>

            { /* Habits grid cell */ }
            <div className="container-fluid flex flex-col w-full">

                { /* Top bar of habits with controls buttons */ }
                <span className="flex flex-row justify-between p-4 border-b-2 border-b-neutral-300">
                    <h2 className="text-3xl text-neutral-500 uppercase font-bold">Habits</h2>
                    <button className="text-2xl text-neutral-400">New <i className="text-2xl fa-solid fa-plus"/></button>
                </span>

                <div className="flex flex-col justify-start p-4">
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

