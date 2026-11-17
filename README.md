# SpendWise – Personal Budget Tracker

## 1. Project Description

SpendWise is a personal budget tracking web application developed using HTML, CSS, and JavaScript.

The application helps users manage their expenses, monitor their spending, and calculate their remaining balance.

Users can enter expense details, select expense categories, and view their recorded expenses in a table. The dashboard automatically updates total expenses and remaining balance when a new expense is added.

## 2. JavaScript Concepts Implemented

The following JavaScript concepts were implemented in this project:

- Variables and constants
- Data types
- User input
- Type conversion
- Arithmetic operators
- Comparison operators
- Conditional statements (`if` and `else`)
- Functions
- DOM manipulation
- Event listeners
- Form validation

## 3. How Variables Are Used

Variables are used to store information required for budget calculations and expense management.

Examples include:

- `monthlyIncome`: Stores the user's monthly income.
- `monthlyBudget`: Stores the user's monthly budget.
- `foodExpense`: Stores food expenses.
- `transportExpense`: Stores transport expenses.
- `totalExpenses`: Stores the sum of expenses.
- `remainingBalance`: Stores the money remaining after expenses.

The `let` keyword is used for variables whose values can change, while `const` is used for values that should not be reassigned.

Example:

```javascript
let monthlyIncome = 50000;
let monthlyBudget = 30000;

const currency = "KES";
```

## 4. How User Input Is Collected

SpendWise collects user information through two methods.

### A. Using prompt()

JavaScript's `prompt()` function collects information directly from the user through browser dialog boxes.

Example:

```javascript
let monthlyIncome = Number(
    prompt("Enter your monthly income:")
);

let monthlyBudget = Number(
    prompt("Enter your monthly budget:")
);
```

The `Number()` function converts the entered values into numbers so they can be used in mathematical calculations.

### B. Using HTML Form Inputs

The application also collects expense information through an HTML form.

Users enter:

- Expense name
- Expense amount
- Expense category
- Expense date

JavaScript retrieves the entered information using `document.getElementById()` and the `.value` property.

The Add Expense button uses an event listener to respond when the user clicks it.

## 5. How Calculations Are Performed

JavaScript arithmetic operators are used to calculate total expenses and remaining balance.

### Total Expenses

The application adds individual expense amounts to determine total spending.

```javascript
let totalExpenses =
    foodExpense +
    transportExpense +
    rentExpense +
    entertainmentExpense;
```

### Remaining Budget

The remaining budget is calculated by subtracting total expenses from the monthly budget.

```javascript
let remainingBudget =
    monthlyBudget - totalExpenses;
```

### Remaining Balance

The remaining balance is calculated by subtracting total expenses from monthly income.

```javascript
let remainingBalance =
    monthlyIncome - totalExpenses;
```

### Budget Validation

A comparison operator checks whether total expenses exceed the monthly budget.

```javascript
let isBudgetExceeded =
    totalExpenses > monthlyBudget;
```

When a new expense is