import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";

import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.exp[0].title}
        amount={props.exp[0].amount}
        date={props.exp[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.exp[1].title}
        amount={props.exp[1].amount}
        date={props.exp[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.exp[2].title}
        amount={props.exp[2].amount}
        date={props.exp[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.exp[3].title}
        amount={props.exp[3].amount}
        date={props.exp[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
