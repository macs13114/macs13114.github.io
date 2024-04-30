let inputLoan = document.getElementById("loan-value");
let inputMonths = document.getElementById("months");
let inputInterest = document.getElementById("interest");
let calculationBox = document.getElementById("end-result");
let endResult = null;

function calculateMonthlyPayout() {
    endResult = inputLoan + inputMonths + inputInterest;
    calculationBox.append = endResult;
}