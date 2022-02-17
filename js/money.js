
function getCurrentBalance() {
    const balanceTotal = document.getElementById('saving-amount-id');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function getTotalBalance() {
    const balanceTotal = document.getElementById('total-balance-id');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}


// get expense item values
function itemValue(item) {
    const itemInput = document.getElementById(item + '-id');
    const itemExpenseText = itemInput.value;
    const itemExpense = parseFloat(itemExpenseText);
    return itemExpense;
}

// Update Total Expense Field
function updateTotalExpenseField(item, amount) {
    const totalElement = document.getElementById(item + '-id');
    totalElement.innerText = amount;
}
/* function updateTotalExpenseField(amount) {
    const totalElement = document.getElementById('total-expense-id');
    totalElement.innerText = amount;
} */
// percentage 
function percentage(num, per) {
    return (num / 100) * per;
}


// handle canculate button event
document.getElementById('calculate-id').addEventListener('click', function () {
    if (isNaN(itemValue('income')) || isNaN(itemValue('food')) || isNaN(itemValue('rent')) || isNaN(itemValue('cloths'))) {
        alert('it is string or blank. Please give a positive value');
    }
    else if (itemValue('income') < 0 || itemValue('food') < 0 || itemValue('rent') < 0 || itemValue('cloths') < 0) {
        alert('it is negative value.Please give a positive value');
    }
    else {
        const incomeValue = itemValue('income');
        const expenseValue = itemValue('food') + itemValue('rent') + itemValue('cloths');
        updateTotalExpenseField('total-expense', expenseValue);
        const totalElement = document.getElementById('total-balance-id');
        if (expenseValue > incomeValue) {
            alert('Expense is greater than Income');
        }
        else {
            totalElement.innerText = incomeValue - expenseValue;
        }
        // console.log(itemValue('total-balance'));

        // document.getElementById('income-id').value = '';
        document.getElementById('food-id').value = '';
        document.getElementById('rent-id').value = '';
        document.getElementById('cloths-id').value = '';
    }
});

// saving amount 
document.getElementById('saving-btn').addEventListener('click', function () {
    if (isNaN(itemValue('saving')) || isNaN(itemValue('income'))) {
        alert('it is string or blank or negative value.Please give a positive value');
    }
    else if (itemValue('saving') < 0 || itemValue('income') < 0) {
        alert('it is negative value.Please give a positive value');
    }
    else {
        // const incomeValue = itemValue('income');
        // const expenseValue = itemValue('food') + itemValue('rent') + itemValue('cloths');
        // updateTotalExpenseField(expenseValue);
        // const totalElement = document.getElementById('total-balance-id');
        // if (expenseValue > incomeValue) {
        //     alert('Expense is greater than Income');
        // }
        // else {
        //     totalElement.innerText = incomeValue - expenseValue;
        // }
        // console.log(percentage(10000, 20));
        const saving_amount = percentage(itemValue('income'), itemValue('saving'));
        updateTotalExpenseField('saving-amount', saving_amount);

        // console.log(itemValue('total-balance'));

        document.getElementById('saving-id').value = '';
        document.getElementById('income-id').value = '';
        document.getElementById('balance-total').innerText = getTotalBalance() - getCurrentBalance();

    }
});