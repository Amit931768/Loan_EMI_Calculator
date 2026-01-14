function calculateEMI() {
  let P = document.getElementById("loanAmount").value;
  let annualRate = document.getElementById("interestRate").value;
  let N = document.getElementById("loanTime").value;

  if(P=="" || annualRate=="" || N==""){
    alert("Please fill all fields");
    return;
  }

  let R = annualRate / 12 / 100;

  let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

  let totalPayment = EMI * N;
  let totalInterest = totalPayment - P;

  document.getElementById("emi").innerText = "₹ " + EMI.toFixed(2);
  document.getElementById("totalInterest").innerText = "₹ " + totalInterest.toFixed(2);
  document.getElementById("totalPayment").innerText = "₹ " + totalPayment.toFixed(2);
}
