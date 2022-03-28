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
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}

        />

        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />

        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date} />

      </Card>
    </div>
  );

}

export default ExpensesList;
