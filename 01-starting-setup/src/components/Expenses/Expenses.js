import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./UI/Card";

const Expenses = (props) =>{
    return (
        <Card className="expenses">
            <h2>Let's get started!</h2>
            <ExpenseItem title={props.item[0].title}
                         amount={props.item[0].amount} date={props.item[0].date}></ExpenseItem>
            <ExpenseItem title={props.item[1].title}
                         amount={props.item[1].amount} date={props.item[1].date}></ExpenseItem>
            <ExpenseItem title={props.item[1].title}
                         amount={props.item[2].amount} date={props.item[2].date}></ExpenseItem>
            <ExpenseItem title={props.item[2].title}
                         amount={props.item[2].amount} date={props.item[2].date}></ExpenseItem>

        </Card>
    );
}

export default Expenses