function amount(inputId) {
  const getElement = document.getElementById(inputId);
  const amountValueString = getElement.value;
  const amountValue = parseFloat(amountValueString);
  if (isNaN(amountValue)) {
    return 0;
  } else {
    return amountValue;
  }
}

document
  .getElementById("calculate-total-expense")
  .addEventListener("click", function () {
    const income = amount("income-inputField");

    const foodExpense = amount("food-expense");
    const houseRent = amount("house-rent");
    const clothExpense = amount("cloth-expense");

    const totalExpense = foodExpense + houseRent + clothExpense;
    const remaingBalance = income - totalExpense;

    const totalExpenseDisplay = document.getElementById("total-expense");
    totalExpenseDisplay.innerText = totalExpense;

    const remaingBalanceDisplay = document.getElementById("remaining-balance");
    remaingBalanceDisplay.innerText = remaingBalance;
  });

document.getElementById("save-btn").addEventListener("click", function () {
  const saveParsent = amount("save-parsent");

  const remaingBalanceDisplay = document.getElementById("remaining-balance");
  const remaingBalance = parseFloat(remaingBalanceDisplay.innerText);

  const totalSave = (remaingBalance * saveParsent) / 100;

  const totalAfterSaving = remaingBalance - totalSave;

  const saveAmountDisplay = document.getElementById("save-amount");
  saveAmountDisplay.innerText = totalSave;

  const totalAfterSavingDisplay = document.getElementById("total-after-saving");
  totalAfterSavingDisplay.innerText = totalAfterSaving;
});
