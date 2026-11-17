
// ======================================
// SPENDWISE - COLLECT USER INPUT
// ======================================

console.log("===== WELCOME TO SPENDWISE =====");

let monthlyIncome = Number(
    prompt("Enter your monthly income (KES):")
);

let monthlyBudget = Number(
    prompt("Enter your monthly budget (KES):")
);

let foodExpense = Number(
    prompt("Enter your food expenses (KES):")
);

let transportExpense = Number(
    prompt("Enter your transport expenses (KES):")
);

let rentExpense = Number(
    prompt("Enter your rent expenses (KES):")
);

let entertainmentExpense = Number(
    prompt("Enter your entertainment expenses (KES):")
);


// ======================================
// SPENDWISE - BUDGET CALCULATIONS
// ======================================

// Calculate total expenses

let totalExpenses =
    foodExpense +
    transportExpense +
    rentExpense +
    entertainmentExpense;

// Calculate remaining budget

let remainingBudget = monthlyBudget - totalExpenses;

// Check whether budget is exceeded

let isBudgetExceeded = totalExpenses > monthlyBudget;


// ======================================
// UPDATE SPENDWISE DASHBOARD
// ======================================

// Calculate remaining balance from income
let remainingBalance = monthlyIncome - totalExpenses;

// Find the Total Expenses HTML element
let totalExpensesElement = document.getElementById("total-expenses");

// Find the Remaining Balance HTML element
let remainingBalanceElement = document.getElementById("remaining-balance");

// Update Total Expenses on the dashboard
totalExpensesElement.textContent =
    "KES " + totalExpenses.toLocaleString("en-KE");

// Update Remaining Balance on the dashboard
remainingBalanceElement.textContent =
    "KES " + remainingBalance.toLocaleString("en-KE");

// ======================================
// DISPLAY RESULTS
// ======================================

console.log("===== SPENDWISE BUDGET REPORT =====");

console.log("Monthly Income:", monthlyIncome);
console.log("Monthly Budget:", monthlyBudget);

console.log("Food Expenses:", foodExpense);
console.log("Transport Expenses:", transportExpense);
console.log("Rent Expenses:", rentExpense);
console.log("Entertainment Expenses:", entertainmentExpense);

console.log("Total Expenses:", totalExpenses);
console.log("Remaining Budget:", remainingBudget);
console.log("Budget Exceeded:", isBudgetExceeded);

console.log("SpendWise JavaScript is running!");

// Find the expenses table body
const expensesTableBody = document.getElementById("expenses-table-body");

// Check whether JavaScript finds the table
console.log("Expenses table found:", expensesTableBody);

function addExpenseToTable(name, amount, category, date) {

    // Create a new table row
    const newRow = document.createElement("tr");

    // Add expense information to the row
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${amount.toLocaleString("en-KE")}</td>
        <td> ${category}</td>
        <td>${date}</td>
    `;

    // Add the row to the expenses table
    expensesTableBody.appendChild(newRow);
}

// Find the Add Expense button
const addExpenseButton = document.getElementById("add-expense-btn");

// Listen for button clicks
addExpenseButton.addEventListener("click", function() {

    // Get information from the form
    let expenseName = document.getElementById("expense-name").value;
    let expenseAmount = Number(document.getElementById("expense-amount").value);
    let expenseCategory = document.getElementById("expense-category").value;
    let expenseDate = document.getElementById("expense-date").value;

    // Check whether the required information is entered
    if (expenseName.trim() === "" || expenseAmount <= 0 || !Number.isFinite(expenseAmount) || expenseDate === "") {

        alert("Please enter a valid expense name, amount and date.");

    } else {

        // Add the expense to the table
        addExpenseToTable(
            expenseName,
            expenseAmount,
            expenseCategory,
            expenseDate
        );
        // Update total expenses
totalExpenses = totalExpenses + expenseAmount;

// Recalculate remaining balance
remainingBalance = monthlyIncome - totalExpenses;

// Update dashboard cards
totalExpensesElement.textContent =
    "KES " + totalExpenses.toLocaleString("en-KE");

remainingBalanceElement.textContent =
    "KES " + remainingBalance.toLocaleString("en-KE");

        // Confirm success
        alert("Expense added successfully!");

        // Clear the form
        document.getElementById("expense-name").value = "";
        document.getElementById("expense-amount").value = "";
        document.getElementById("expense-date").value = "";
    }

});