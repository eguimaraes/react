import React, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
const [isEditing,setIsEditing]= useState(false);

          const SaveExpenseDataHandler = (enteredExpenseData) => {

                    const expenseData = {
                              id: Math.random().toString(),
                              ...enteredExpenseData,
                    };

                    props.onAddExpense(expenseData);
          };

          const startEditingHandler=()=>{
setIsEditing(true);

          }


          const stopEditingHandler=()=>{setIsEditing(false);};


          return (<div className="new-expense">
                 {!isEditing &&  <button onClick={startEditingHandler}>Add New Expense</button>}
                 {isEditing &&    <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler} />}
          </div>)


}
export default NewExpense;


import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

      const [enteredTitle, setEnteredTitle] = useState('');
      const [enteredAmount, setEnteredAmount] = useState('');
      const [enteredDate, setEnteredDate] = useState('');



      const titleChangeHandler = (event) => {
            setEnteredTitle(event.target.value)


      }

      const amountChangeHandler = (event) => {
            setEnteredAmount(event.target.value)

      };

      const dateChangeHandler = (event) => {
            setEnteredDate(event.target.value)

      };

      const submitHandler = (event) => {
            event.preventDefault();

            const expenseData = {
                  title: enteredTitle,
                  amount: enteredAmount,
                  date: new Date(enteredDate)
            };

           

            props.onSaveExpenseData(expenseData);
            
            
          
            setEnteredAmount('');
            setEnteredDate('');
            setEnteredTitle('');

      };


      return <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                  <div className="new-expense__control">
                        <label>Title</label>
                        <input
                              type="text"
                              value={enteredTitle}
                              onChange={titleChangeHandler} />
                  </div>
            </div>

            <div className="new-expense__controls">
                  <div className="new-expense__control">

                        <label>Amount</label>

                        <input
                              type="number"
                              value={enteredAmount}
                              min="0.01"
                              step='0.01'
                              onChange={amountChangeHandler} />

                  </div>
            </div>

            <div className="new-expense__controls">
                  <div className="new-expense__control">
                        <label>Date</label>
                        <input
                              type="date"
                              value={enteredDate}
                              min="2019-01-01"
                              max='2022-12-31'
                              onChange={dateChangeHandler}
                        ></input>
                  </div>
            </div>
            <div className="new-expense__actions">
<button type="button" onClick={props.onCancel}>Cancel</button>
                  <button type="submit">Add Expense</button>


            </div>

      </form>

};

export default ExpenseForm;


import React, { useState } from "react";
import Card from "../UI/card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";




const Expenses = (props) => {

  const [anoFiltrado, setAnoFiltrado] = useState('2020');

  const onChangeFilterhandler = AnoEscolhido => {

    setAnoFiltrado(AnoEscolhido);



  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === anoFiltrado;

  });


  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={anoFiltrado}
          onMudanca={onChangeFilterhandler} />
     <ExpensesList items={filteredExpenses} />

      </Card>
    </div>
  );

}

export default Expenses;



