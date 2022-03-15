import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//importing ExpenseDate and using it on line 11.
//Nesting components in components for organization.
//Too much nesting can get confusing. Really need to think out working tree.

const ExpenseItem = (props) => {
  
  // Naming conventions end with Handler. means its being called and attached by an event.
  const clickHandler = () => {
    console.log("CLicked!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate data={props.data} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
