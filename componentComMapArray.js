import React, { useState } from "react";
import Card from "./card";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";


const ExpensesList = (props) => {

  const [anoFiltrado, setAnoFiltrado] = useState('2019');

  const onChangeFilterhandler = AnoEscolhido => {

    setAnoFiltrado(AnoEscolhido);

  };

  return (
    <div>


      <Card className="Expenses">
        <ExpensesFilter
          selected={anoFiltrado}
          onMudanca={onChangeFilterhandler} />

        {props.items.map((expense) =>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}

          />
        )}


      </Card>
    </div>
  );

}

export default ExpensesList;
