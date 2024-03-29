import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate'
import Card from './card';
import './ExpenseItem.css';



const ExpenseItem=(props)=>{
const [title,setTitle] = useState(props.title);

const clickHandler=()=>{
       setTitle('UpDated');             
       console.log(title);
}

          return (
                    <Card className='expense-item'>
                              <ExpenseDate date={props.date} />
                              <div className='expense-item__description'>
                                        <h2>{title}</h2>
                              </div>

                              <div className='expense-item__price'>${props.amount}</div>
<button onClick={clickHandler}>Change title</button>
                    </Card>
          );
}




export default ExpenseItem;
