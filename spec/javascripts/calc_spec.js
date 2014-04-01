describe ("future value", function(){
  var numberOfPeriods;
  var monthlyinterestRate;
  var pv;
  var pmt;
  beforeEach(function(){
    numberOfPeriods = 480;
    monthlyInterestRate = 0.00666666667;
    pv = 200;
    pmt = 100;
  });

  it ("should return the FV of an annuity", function(){
    expect(calcFVofOrdinaryAnnuity(pmt, numberOfPeriods, monthlyInterestRate)).toBeCloseTo(349101, 0)
  });

  it ("should return the FV of a present value", function (){
    expect(calcFVofPV(pv, numberOfPeriods, monthlyInterestRate)).toBeCloseTo(4855, 0)
  });

  it ("should return the FV of an ordinary annuity when theres a present sum", function(){
    var FVofPV = calcFVofPV(pv, numberOfPeriods, monthlyInterestRate)
    var FVofOrdinaryAnnuity = calcFVofOrdinaryAnnuity(pmt, numberOfPeriods, monthlyInterestRate)
    expect(calcFVofOrdinaryAnnuityWithPV(FVofPV, FVofOrdinaryAnnuity)).toBeCloseTo(353955, 0)
  });

});

describe ("adjustments from form", function(){
  it ("should adjust the interest rate", function(){
    var interestRate = 0.08;
    var monthlyInterestRate = 0.00666666667;
    expect(monthlyAdjustInterestRate(interestRate)).toBeCloseTo(monthlyInterestRate, 3)
  });

  it ("should return number of periods until retirement", function(){
    var age = 23
    expect(yearUntilRetirement(age)).toEqual(504)
  });
});