import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        const inputValue = event.target.value;
        setEnteredValue(inputValue);

        if (inputValue.trim().length > 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }

        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button
                type="submit"
                style={{ backgroundColor: !isValid ? 'lightcoral' : 'red' }}
                disabled={!isValid}
            >
                Add Goal
            </Button>
        </form>
    );
};

export default CourseInput;
