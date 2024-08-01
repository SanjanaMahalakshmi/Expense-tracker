document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('expense-form');
    const tableBody = document.querySelector('#expense-table tbody');
    const totalAmountSpan = document.getElementById('total-amount');
    let expenses = [];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('expense-name').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);
        const category = document.getElementById('expense-category').value;
        const date = document.getElementById('expense-date').value;

        const expense = { name, amount, category, date };

        expenses.push(expense);
        addExpenseToTable(expense);
        updateTotalAmount();
        form.reset();
    });

    function addExpenseToTable(expense) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
            <td><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></td>
        `;
        tableBody.appendChild(row);

        row.querySelector('.delete-btn').addEventListener('click', function() {
            tableBody.removeChild(row);
            expenses = expenses.filter(exp => exp !== expense);
            updateTotalAmount();
        });

        // Implement edit functionality as needed
    }

    function updateTotalAmount() {
        const totalAmount = expenses.reduce((total, exp) => total + exp.amount, 0);
        totalAmountSpan.textContent = totalAmount.toFixed(2);
    }
});