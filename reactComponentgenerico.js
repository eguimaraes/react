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
