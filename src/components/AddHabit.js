/*
    Omar Johnson
    Add Habit component
    The page that users go to when they want to create a new habit

    On this page is a form to design the habit

    Future: Habit frequency! (i.e. daily, weekly, biweekly, monthly, yearly)
 */
import { useQuery } from '@tanstack/react-query';
import { requireAuthRedirect } from './session';
import { getHabits } from "./api";

/* Habit form */
function AddHabit()
{
    // Must be logged in to add a habit
    requireAuthRedirect();

    // Query habit data from the API
    const { data, error, isPending, isFetching } = useQuery({
        queryKey: ['habits'],
        queryFn: getHabits.bind(null, 1)
    });

    return (
        <div className="container-fluid flex flex-col w-full h-full justify-center items-center">

            { /* Begin form */ }
            <form id="add-habit" className="container-fluid flex flex-col w-1/3 h-2/3 p-16 items-center gap-y-8 bg-gray-200 rounded-xl shadow-md">

                <h1 className="text-3xl">Add a New Habit</h1>

                <label htmlFor="description" className="inline text-xl w-full">What are you trying to do?
                    <input id="description" type="text" name="description" placeholder="For example: Floss my teeth" className="w-full p-2 rounded-xl" />
                </label>

                <label htmlFor="type" className="inline text-xl w-full">How do you want to measure your progress?
                    <input id="type-0" type="radio" name="type" value="0" className="w-full p-2 rounded-xl" />
                    { /* Special choice buttons */ }
                </label>

                { /* Only visible for number-based habits */ }
                <label htmlFor="target" className="inline text-xl w-full">How do you want to measure your progress?
                    <input id="target" type="number" name="target" value="1" className="block w-12 p-2 rounded-xl" />
                </label>

                <span className="flex flex-row w-full justify-between">
                    <label htmlFor="difficulty" className="inline text-xl w-1/2">How hard do you perceive your goal?
                        <select id="difficulty" name="difficulty" className="block w-1/5 p-2 rounded-xl">
                            <option value="0" className="bg-red-100">Trivial</option>
                            <option value="1" className="bg-red-300">Normal</option>
                            <option value="2" className="bg-red-500">Difficult</option>
                        </select>
                    </label>

                    <label htmlFor="points" className="inline text-xl self-end">
                        <label className="flex gap-x-8 items-center"> Default: 5
                            <input id="points" type="number" name="points" value="5" className="w-12 p-2 rounded-xl" />
                        </label>
                    </label>
                </span>

                <button id="submit" type="submit" className="">Add</button>

            </form>

        </div>
    );
}

export default AddHabit;

