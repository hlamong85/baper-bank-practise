document.getElementById('deposit').addEventListener('click', function () {
    const inputText = document.getElementById('deposit-amount');
    const inputTextValue = inputText.value;
    const inputValue = parseFloat(inputTextValue);
    console.log(inputValue);
    //clear input
    inputText.value = '';
    // inputText.value = inputValue;
    //show deposit value
    const depositInput = document.getElementById('deposit-total');
    const depositInputText = depositInput.innerText;
    const depositInputValue = parseFloat(depositInputText);
    const currentDeposit = depositInputValue + inputValue;
    // depositInput.innerText = inputValue;
    depositInput.innerText = currentDeposit;
    console.log(currentDeposit);
    // update balace-total
    const updateTotalText = document.getElementById('update-total');
    const updateTotalTextValue = updateTotalText.innerText;
    const updateTotalValue = parseFloat(updateTotalTextValue);
    const updateTotal = updateTotalValue + inputValue;
    updateTotalText.innerText = updateTotal;








});
document.getElementById('withdraw').addEventListener('click', function () {
    const withdrawText = document.getElementById('withdraw-amount');
    const withdrawTextAmount = withdrawText.value;
    const withdrawAmount = parseFloat(withdrawTextAmount);
    //show withdraw
    const withdrawOutputText = document.getElementById('withdraw-total');
    const withdrawTextValue = withdrawOutputText.innerText;
    const getAmountWithdraw = parseFloat(withdrawTextValue);
    const newWithdrawTotal = withdrawAmount + getAmountWithdraw;
    withdrawOutputText.innerText = newWithdrawTotal;
    withdrawText.value = '';

    //update balance total minus
    const withdrawTotal = document.getElementById('update-total');
    const withdrawTotalTextValue = withdrawTotal.innerText;
    const withdrawTotalValue = parseFloat(withdrawTotalTextValue);
    const withdrawUpdateteTotal = withdrawTotalValue - withdrawAmount;
    withdrawTotal.innerText = withdrawUpdateteTotal;


})