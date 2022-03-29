import React, { useState } from "react";
import Card from "./card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";




const ExpensesList = (props) => {



  const [anoFiltrado, setAnoFiltrado] = useState('2020');

  const onChangeFilterhandler = AnoEscolhido => {

    setAnoFiltrado(AnoEscolhido);

  

  };

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===anoFiltrado;
   
   });  

  


  return (
    <div>
      <Card className="Expenses">
        <ExpensesFilter
          selected={anoFiltrado}
          onMudanca={onChangeFilterhandler} />

        {filteredExpenses.map((expense) =>
          <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />
        )}

      </Card>
    </div>
  );

}

export default ExpensesList;
