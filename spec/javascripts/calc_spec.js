describe ("future value", function(){
  var numberOfPeriods;
  var interestRate;
  var pv;
  var pmt;
  beforeEach(function(){
    numberOfPeriods = 480;
    interestRate = 0.00666666667;
    pv = 200;
    pmt = 100;
  });

  it ("should return the FV of an annuity", function(){
    expect(calcFVofOrdinaryAnnuity(pmt, numberOfPeriods, interestRate)).toBeCloseTo(349101, 0)
  });

  it ("should return the FV of a present value", function (){
    expect(calcFVofPV(pv, numberOfPeriods, interestRate)).toBeCloseTo(4855, 0)
  });

  it ("should return the FV of an ordinary annuity when theres a present sum", function(){
    var FVofPV = calcFVofPV(pv, numberOfPeriods, interestRate)
    var FVofOrdinaryAnnuity = calcFVofOrdinaryAnnuity(pmt, numberOfPeriods, interestRate)
    expect(calcFVofOrdinaryAnnuityWithPV(FVofPV, FVofOrdinaryAnnuity)).toBeCloseTo(353955, 0)
  });
});