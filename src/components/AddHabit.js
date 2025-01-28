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
import { OptionsField } from './Form';
import {useState} from "react";
import {useNavigate} from "react-router";

/* Habit form */
function AddHabit()
{
    const [selectedType, setSelectedType] = useState('DO');
    const [selectedDifficulty, setSelectedDifficulty] = useState(1);

    const navigate = useNavigate();

    // Must be logged in to add a habit
    requireAuthRedirect();

    // Query habit data from the API
    const { data, error, isPending, isFetching } = useQuery({
        queryKey: ['habits'],
        queryFn: getHabits.bind(null, 1)
    });

    const refreshOptions = (selected) => {
        setSelectedType(selected);
    };

    const isNumberHabit = selectedType === 'MIN' || selectedType === 'MAX';

    const difficultyDefaultPoints = {
      '0': 5,
      '1': 10,
      '2': 15
    };

    const defaultPoints = difficultyDefaultPoints[selectedDifficulty];

    return (
        <div className="container-fluid flex flex-col w-full h-full justify-center items-center">

            { /* Begin form */ }
            <form id="add-habit" className="container-fluid flex flex-col w-1/3 min-h-3/5 p-16 items-center gap-y-8 bg-gray-200 rounded-xl shadow-md">

                <h1 className="text-3xl">Add a New Habit</h1>

                <label htmlFor="description" className="inline text-xl w-full">What are you trying to do?
                    <input id="description" type="text" name="description" placeholder="For example: Floss my teeth" className="w-full p-2 rounded-xl" />
                </label>

                <OptionsField prompt="How do you want to measure your progress?" name="type" options={
                    [{value: 'DO', text: 'Perform a task daily', checked: true}, {value: 'DNT', text: 'Avoid one thing daily'},
                        {value: 'MIN', text: 'Perform a task a minimum number of times'}, {value: 'MAX', text: 'Avoid doing something more than a specified # of times'}]
                } refresh={refreshOptions}/>

                { /* Only visible for number-based habits */ }
                <label htmlFor="target" className={`inline text-xl w-full ${isNumberHabit ? 'visible' : 'invisible'}`}>Set a {selectedType === 'MIN' ? 'minimum' : 'maximum'} target: { /* Set a limit */ }
                    <input id="target" type="number" name="target" value="1" className="block w-12 p-2 rounded-xl" />
                </label>

                <span className="flex flex-row w-full justify-between">
                    <label htmlFor="difficulty" className="inline text-xl w-1/2">How hard do you perceive your goal?
                        <select id="difficulty" name="difficulty" className="block w-1/3 p-2 rounded-xl" value={selectedDifficulty} onChange={(e) => { setSelectedDifficulty(e.target.value)}}>
                            <option value="0" className="bg-red-100">Trivial</option>
                            <option value="1" className="bg-red-300">Normal</option>
                            <option value="2" className="bg-red-500">Difficult</option>
                        </select>
                    </label>

                    <label htmlFor="points" className="inline text-xl self-end">
                        <label className="flex gap-x-8 items-center"> Recommended: {defaultPoints}
                            <input id="points" type="number" name="points" defaultValue={defaultPoints} className="w-16 p-2 rounded-xl" />
                        </label>
                    </label>
                </span>

                <span className="flex flex-col items-center gap-y-4">
                    <button id="submit" type="submit" className="text-xl h-12 pl-8 pr-8 bg-blue-300 hover:bg-blue-400 rounded-xl">Add</button>
                    <a id="cancel" onClick={() => { navigate('/habits'); }} href="#" className="text-lg text-red-500 underline">Cancel</a>
                </span>

            </form>

        </div>
    );
}

export default AddHabit;

