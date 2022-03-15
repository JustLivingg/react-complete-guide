import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import React, { useState } from "react";

// useState is a function provided by React Library, used for State.
// useState returns an array.
// Hooks start with the word use.

//importing ExpenseDate and using it on line 11.
//Nesting components in components for organization.
//Too much nesting can get confusing. Really need to think out working tree.

const ExpenseItem = (props) => {
  // Must happen inside function.
  const [title, setTitle] = useState(props.title);
  
  // Naming conventions end with Handler. means its being called and attached by an event.
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate data={props.data} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
