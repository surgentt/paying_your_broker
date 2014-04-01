$(document).ready(function(){
  // Assumptuons
  var growth_rate = 8;
  var vanguard_ratio = 0.17;
  var retirementAge = 65;

  function PortfolioValue (PV, pmt, age, ER) {
    this.pv = PV;
    this.pmt = pmt;
    this.age = age;
    this.ER = ER;

    this.numberOfPeriods = monthsUntilRetirement(this.age, retirementAge);
    this.interestRate = monthlyAdjustInterestRate(growth_rate - this.ER)/100;
    this.FVofPV = calcFVofPV(this.pv, this.numberOfPeriods, this.interestRate);
    this.FVofOrdinaryAnnuity = calcFVofOrdinaryAnnuity(this.pmt, this.numberOfPeriods, this.interestRate)
    this.fv = calcFVofOrdinaryAnnuityWithPV(this.FVofPV, this.FVofOrdinaryAnnuity);
  }

  $(".user_input").on("submit", function(e){
    e.preventDefault();

    var pv = $("#present_value").val();
    var pmt = $("#pmt").val();
    var age = $("#age").val();
    var expenseRatio = $("#expense_ratio").val();

    var port1 = new PortfolioValue(pv, pmt, age, expenseRatio)
    var port2 = new PortfolioValue(pv, pmt, age, vanguard_ratio)
    var ripoff = "$" + (port2.fv - port1.fv).formatMoney(0)
    $(".ripoff").append(ripoff)
  });

});

// function calcFVofOrdinaryAnnuity (pmt, numberOfPeriods, monthlyInterestRate) {
//   var factor = ((Math.pow((1 + monthlyInterestRate), numberOfPeriods)) - 1) / monthlyInterestRate;
//   var futureValueofOrdinaryAnnuity = pmt * factor;
//   return futureValueofOrdinaryAnnuity;
// }

// function calcFVofPV (pv, numberOfPeriods, monthlyInterestRate){
//   var factor = Math.pow((1 + monthlyInterestRate), numberOfPeriods)
//   var pv = pv;
//   return futureValueofPV = pv * factor;
// }

// function calcFVofOrdinaryAnnuityWithPV(FVofPV, FVofOrdinaryAnnuity) {
//   return FVofPV + FVofOrdinaryAnnuity;
// }

// function monthlyAdjustInterestRate(interestRate) {
//   return interestRate / 12
// }

// function monthsUntilRetirement(age){
//   return (65 - age) * 12 
// }