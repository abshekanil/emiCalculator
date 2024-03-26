const loanAmount = document.getElementById('loanAmt');
const interestRate = document.getElementById('interest');
const loanTenure = document.getElementById('tenure');
const emiDisplay = document.getElementById('emi');
const btn = document.getElementById('calculate');

btn.addEventListener("click", function(){
    if(loanAmount.value === "" || interestRate.value === "" || loanTenure.value === "")
    {
        alert("Please Enter Data");
    }
    emiDisplay.innerHTML = calculateEmi();
});

function calculateEmi(){
    let P = parseFloat(loanAmount.value);
    let annualRate = parseFloat(interestRate.value) / 100;
    let R = annualRate / 12;
    let N = parseFloat(loanTenure.value);

    let emi = Math.round((P * R * Math.pow((1 + R),N)) / (Math.pow((1 + R), N) - 1));
    return emi;
}
