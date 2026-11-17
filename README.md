# SpendWise – Interactive Expense Tracker

## 1. Project Description

SpendWise is a simple personal budgeting and expense-tracking application developed using HTML, CSS, and JavaScript.

The application helps users monitor their monthly income, record expenses, calculate total spending, and track their remaining balance.

It uses Kenyan Shillings (KES) as its currency.

## 2. Week 6 Improvements

During Week 6, I improved SpendWise by making it interactive using JavaScript.

The improvements include:

- Collecting expense information through HTML input fields.
- Adding new expenses dynamically.
- Storing multiple expense records in a JavaScript array.
- Calculating total expenses automatically.
- Updating the remaining balance.
- Displaying expense records in an HTML table.
- Providing budget feedback using conditional statements.
- Validating user input before adding expenses.

## 3. JavaScript Concepts Implemented

### Variables

Variables store important information such as monthly income, monthly budget, expense amounts, and remaining balance.

Example:

```javascript
let monthlyIncome = Number(prompt("Enter your monthly income (KES):"));

let monthlyBudget = Number(prompt("Enter your monthly budget (KES):"));
```

### User Input

The application collects expense information using HTML input fields.

These include:
- Expense name
- Amount
- Category
- Date

JavaScript accesses these values using `document.getElementById()`.

### Arrays

An array is used to store multiple expense records.

```javascript
let expenses = [];
```

Each expense is stored as an object containing its name, amount, category, and date.

Example:

```javascript
let newExpense = {
    name: expenseName,
    amount: expenseAmount,
    category: expenseCategory,
    date: expenseDate
};

expenses.push(newE xpense);
```

### Functions

Functions organize the JavaScript code into reusable blocks.

Examples include:

- `calculateTotalExpenses()` – calculates total expenses.
- `displayExpenses()` – displays expenses in the table.
- `updateDashboard()` – updates the financial summary.

### Loops

A `for` loop processes all expense records stored in the array.

It is used to calculate total expenses and display individual expense records.

### Conditional Statements

Conditional statements help SpendWise make decisions about the user's spending.

Example:

```javascript
if (totalExpenses > monthlyBudget) {
    // Budget exceeded
} else if (totalExpenses >= monthlyBudget * 0.8) {
    // Approaching budget limit
} else {
    // Within budget
}
```

The application provides three types of budget feedback:

- Great! You are within your monthly budget.
- Caution! You are approaching your budget limit.
- Warning! You have exceeded your monthly budget.

### DOM Manipulation

DOM manipulation allows JavaScript to update webpage content without manually editing the HTML every time.

SpendWise uses:
- `document.getElementById()`
- `document.createElement()`
- `appendChild()`
- `textContent`
- `innerHTML`

These methods help display expenses and update dashboard figures.

### Event Listeners

An event listener detects when the user clicks the Add Expense button.

```javascript
addExpenseButton.addEventListener("click", function() {
    // Collect and process expense information
});
```

This allows the application to respond to user actions.

## 4. Input Validation

SpendWise checks expense information before adding a record.

It rejects:
- Empty expense names.
- Missing dates.
- Zero amounts.
- Negative amounts.

The validation prevents invalid expense records from being added.

## 5. Challenges and Solutions

During development, I encountered challenges such as:

- Connecting HTML elements to JavaScript.
- Correctly calculating total expenses.
- Displaying expense records dynamically.
- Updating dashboard figures after adding expenses.
- Implementing conditional statements for budget feedback.

I addressed these challenges by reviewing my JavaScript code, correcting element IDs, organizing functions, and testing the application step by step.

## 6. Testing

The following tests were performed:

| Test | Expected result |
|---|---|
| Empty expense fields | Reject incomplete records |
| Zero amount | Reject the expense |
| Negative amount | Reject the expense |
| Spending above budget | Display a warning |
| Spending below budget | Display positive budget feedback |
| Add valid expense | Display expense in the table |
| Update dashboard | Recalculate totals and balance |

## 7. Technologies Used

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Git and GitHub

## 8. Future Improvements

Possible future improvements include:

- Saving expense records using local storage.
- Adding expense editing and deletion.
- Creating dynamic category summaries.
- Adding charts for spending analysis.
- Generating monthly financial reports.

## 9. Conclusion

Developing SpendWise has helped me understand how HTML, CSS, and JavaScript work together to build interactive web applications.

Through this project, I have gained practical experience with variables, arrays, objects, functions, loops, conditional statements, DOM manipulation, event listeners, and input validation.

This project is part of my Software Engineering learning journey through Power Learn Project (PLP).
