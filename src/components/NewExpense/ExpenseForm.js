import React , {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [userInput,setUserInput] = useState({ enteredTitle: '', enteredAmount: '' ,enteredDate: ''});
                                              
    const userChangeHandler = (event) => {
        setUserInput((prevState) => {
            // console.log(new Date(userInput.enteredDate))
            return {...prevState,[event.target.name]: event.target.value};
        });
     }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
           title: userInput.enteredTitle,
           amount:userInput.enteredAmount,
           date: new Date(userInput.enteredDate)
        }
        setUserInput({ enteredTitle: '', enteredAmount: '' ,enteredDate: ''});
         props.onSaveExpenseData(expenseData);
    }

     return (
        <form onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' name='enteredTitle' value={userInput.enteredTitle} onChange={userChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' name='enteredAmount' min='0.01' step='0.01' value={userInput.enteredAmount} onChange={userChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' name='enteredDate' min='2019-01-01' max='2022-12-31' value={userInput.enteredDate} onChange={userChangeHandler} />
            </div>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;