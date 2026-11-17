
// ======================================
// SPENDWISE - WEEK 6 INTERACTIVE VERSION
// ======================================

console.log("===== WELCOME TO SPENDWISE =====");

// ======================================
// 1. COLLECT MONTHLY FINANCIAL INPUT
// ======================================

let monthlyIncome = Number(
    prompt("Enter your monthly income (KES):")
);

let monthlyBudget = Number(
    prompt("Enter your monthly budget (KES):")
);

// ======================================
// 2. EXPENSES ARRAY
// ======================================

// Store multiple expense records
let expenses = [];

// ======================================
// 3. CONNECT HTML ELEMENTS TO JAVASCRIPT
// ======================================

const totalIncomeElement = document.getElementById("total-income");

const totalExpensesElement = document.getElementById("total-expenses");

const remainingBalanceElement = document.getElementById("remaining-balance");

const expenseNameInput = document.getElementById("expense-name");

const expenseAmountInput = document.getElementById("expense-amount");

const expenseCategoryInput = document.getElementById("expense-category");

const expenseDateInput = document.getElementById("expense-date");

const addExpenseButton = document.getElementById("add-expense-btn");

const expensesTableBody = document.getElementById("expenses-table-body");

const budgetFeedbackElement = document.getElementById("budget-feedback");

// ======================================
// 4. CALCULATE TOTAL EXPENSES USING A LOOP
// ======================================

function calculateTotalExpenses() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        total = total + expenses[i].amount;

    }

    return total;
}

// ======================================
// 5. DISPLAY EXPENSES USING DOM MANIPULATION
// ======================================

function displayExpenses() {

    // Clear existing table records
    expensesTableBody.innerHTML = "";

    // Loop through all stored expenses
    for (let i = 0; i < expenses.length; i++) {

        let expense = expenses[i];

        // Create a new table row
        let newRow = document.createElement("tr");

        // Create table cells
        let nameCell = document.createElement("td");
        let amountCell = document.createElement("td");
        let categoryCell = document.createElement("td");
        let dateCell = document.createElement("td");

        // Add expense information to cells
        nameCell.textContent = expense.name;

        amountCell.textContent =
            "KES " + expense.amount.toLocaleString("en-KE");

        categoryCell.textContent = expense.category;

        dateCell.textContent = expense.date;

        // Add cells to the row
        newRow.appendChild(nameCell);
        newRow.appendChild(amountCell);
        newRow.appendChild(categoryCell);
        newRow.appendChild(dateCell);

        // Add row to the table
        expensesTableBody.appendChild(newRow);
    }
}

// ======================================
// 6. UPDATE THE DASHBOARD
// ======================================

function updateDashboard() {

    // Calculate total expenses from the array
    let totalExpenses = calculateTotalExpenses();

    // Calculate remaining balance
    let remainingBalance = monthlyIncome - totalExpenses;

    // Update total income
    totalIncomeElement.textContent =
        "KES " + monthlyIncome.toLocaleString("en-KE");

    // Update total expenses
    totalExpensesElement.textContent =
        "KES " + totalExpenses.toLocaleString("en-KE");

    // Update remaining balance
    remainingBalanceElement.textContent =
        "KES " + remainingBalance.toLocaleString("en-KE");
        // Check the user's budget situation
if (totalExpenses > monthlyBudget) {

    budgetFeedbackElement.textContent =
        "Warning! You have exceeded your monthly budget.";

} else if (totalExpenses >= monthlyBudget * 0.8) {

    budgetFeedbackElement.textContent =
        "Caution! You are approaching your budget limit.";

} else {

    budgetFeedbackElement.textContent =
        "Great! You are within your monthly budget.";

}

    console.log("Total Expenses:", totalExpenses);

    console.log("Remaining Balance:", remainingBalance);
}

// ======================================
// 7. HANDLE ADD EXPENSE BUTTON CLICK
// ======================================

addExpenseButton.addEventListener("click", function() {

    // Collect information from HTML inputs
    let expenseName = expenseNameInput.value.trim();

    let expenseAmount = Number(expenseAmountInput.value);

    let expenseCategory = expenseCategoryInput.value;

    let expenseDate = expenseDateInput.value;

    // Validate user input
    if (
        expenseName === "" ||
        expenseAmount <= 0 ||
        !Number.isFinite(expenseAmount) ||
        expenseDate === ""
    ) {

        alert("Please enter a valid expense name, amount and date.");

    } else {

        // Create a new expense object
        let newExpense = {

            name: expenseName,

            amount: expenseAmount,

            category: expenseCategory,

            date: expenseDate

        };

        // Store expense in the array
        expenses.push(newExpense);

        console.log("Updated expenses array:", expenses);

        // Update expense table
        displayExpenses();

        // Update dashboard
        updateDashboard();

        // Confirm successful addition
        alert("Expense added successfully!");

        // Clear input fields
        expenseNameInput.value = "";

        expenseAmountInput.value = "";

        expenseDateInput.value = "";

    }

});

// ======================================
// 8. INITIALIZE SPENDWISE DASHBOARD
// ======================================

displayExpenses();

updateDashboard();

console.log("SpendWise Week 6 is running successfully!");
