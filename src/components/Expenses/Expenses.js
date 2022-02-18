import React, { useState } from 'react';
import ExpenseList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) =>{

    const [filteredYear,setFilteredYear] = useState('2021')
    
    console.log(filteredYear);
    const filterChangeHandler = (selectedYear) => {

      setFilteredYear(selectedYear);
    }

   let filteredExpenses = props.items.filter(expense =>  {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // const onDeleteHandler1 = (id) => {
    //   props.onDeleteExpense(id);
    // }
   
    return (
        <Card className="expenses">
           <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
           <ExpensesChart expenses={filteredExpenses} />
           <ExpenseList items={filteredExpenses} />
        </Card>
    )
}
export default Expenses;
