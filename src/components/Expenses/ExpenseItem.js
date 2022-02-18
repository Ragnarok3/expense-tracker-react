import React , {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [hover,setHover] = useState(false);

    const mouseInHandler = () => {
        setHover(true);
    };
    
    const mouseOutHandler = () => {
        setHover(false);
    };
    const deleteHandler = (id) => {
        console.log(id);
        // props.delete(id);
        
    }

    return (
       
        <Card className='expense-item' >
           
            <ExpenseDate date={props.date} />
            <div className='expense-item__description' >
            <h2>{props.title}</h2>
            {hover && <button type="button" onClick={deleteHandler(props.id)} >Delete</button> }
            <div className='expense-item__price'  >${props.amount}</div>
           </div>
          
          
           
        </Card>
      
    )
}

export default ExpenseItem;