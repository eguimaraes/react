import ExpenseDate from './ExpenseDate'
import Card from './card';
import './ExpenseItem.css'


function ExpenseItem(props) {

          const clickHandler=()=>{console.log('Clicked')}

          return (
                    <Card className='expense-item'>
                              <ExpenseDate date={props.date} />
                              <div className='expense-item__description'>
                                        <h2>{props.title}</h2>
                              </div>

                              <div className='expense-item__price'>${props.amount}</div>
<button onClick={clickHandler}>Change title</button>
                    </Card>
          );
}

export default ExpenseItem;
