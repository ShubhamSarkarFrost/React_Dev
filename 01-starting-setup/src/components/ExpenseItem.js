import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>July 06 2022</div>
            <div className="expense-item__description"><h2>Car Insurence</h2>
                <div className="expense-item__price">$293.41</div>
            </div>
        </div>

    );
}

export default ExpenseItem;