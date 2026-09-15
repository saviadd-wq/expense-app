function getExpenses() {

    const expenses =
        localStorage.getItem("expenses");

    if (!expenses) {
        return [];
    }

    return JSON.parse(expenses);
}

function saveExpense(expense) {

    const expenses =
        getExpenses();

    expenses.push(expense);

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}

function getTotalAmount() {

    const expenses =
        getExpenses();

    let total = 0;

    expenses.forEach(expense => {

        total += Number(
            expense.amount || 0
        );
    });

    return total;
}
