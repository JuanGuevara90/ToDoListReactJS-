import {useState} from 'react';
import PropTypes from 'prop-types';

import { TASK_OPERATIONS } from '../common/enums';

const Form = ({onSubmit}) => {
    const [valueInput, setValueInput] = useState("");
    
    const handleChange = ({target:{value}}) => setValueInput(value);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(valueInput,TASK_OPERATIONS.add);
        setValueInput("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
                <div className="flex-col items-center mx-7">
                    <input className="w-4/6 h-full mt-3   px-4 py-2 text-center text-1xl border-2 border-blue-500"  value={valueInput} onChange={handleChange} type="text" placeholder="Enter a task"/>
                    <button className="w-2/6 h-full mt-3  px-4 py-2 text-1xl text-white bg-blue-500 font-medium hover:bg-blue-700 transition duration-300" type="submit">Add</button>
                </div>
        </form>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func
}

export default Form;