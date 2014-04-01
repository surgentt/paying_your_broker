function calcFVofOrdinaryAnnuity (pmt, numberOfPeriods, monthlyInterestRate) {
  var factor = ((Math.pow((1 + monthlyInterestRate), numberOfPeriods)) - 1) / monthlyInterestRate;
  var futureValueofOrdinaryAnnuity = pmt * factor;
  return futureValueofOrdinaryAnnuity;
}

function calcFVofPV (pv, numberOfPeriods, monthlyInterestRate){
  var factor = Math.pow((1 + monthlyInterestRate), numberOfPeriods)
  var pv = pv;
  return futureValueofPV = pv * factor;
}

function calcFVofOrdinaryAnnuityWithPV(FVofPV, FVofOrdinaryAnnuity) {
  return FVofPV + FVofOrdinaryAnnuity;
}

function monthlyAdjustInterestRate(interestRate) {
  return interestRate / 12
}

function monthsUntilRetirement(age){
  return (65 - age) * 12 
}