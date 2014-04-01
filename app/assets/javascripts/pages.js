$(document).ready(function(){
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
    var gift = port2.fv - port1.fv
    var ripoff = "$" + (gift).formatMoney(0)

    $(".ripoff").empty();
    $(".ripoff").append('<h3>You paid your broker '+ ripoff +'</h3>');
    $(".ripoff").append('<h4>Now he can now buy:</h4>');

    if (20 <= gift && gift < 1650){
      $(".ripoff").append('<div>$20 Renova Colored Toliet Paper</div>');
      $(".ripoff").append('<div class="toliet_paper"></div>');
    } else if (1650 <= gift && gift < 6400){
      $(".ripoff").append('<div>$1650 Gold Backpack</div>');
      $(".ripoff").append('<div class="gold_backpack"></div>');
    } else if (6400 <= gift && gift < 18993) {
      $(".ripoff").append('<div>$6400 The Kohler Numi Toilet System</div>');
      $(".ripoff").append('<div class="toliet"></div>');
    } else if (18993 <= gift && gift < 35000) {
      $(".ripoff").append('<div>$18,993 Crystal Ergoripado Vaccum</div>');
      $(".ripoff").append('<div class="vacuum"></div>');      
    } else if (35000 <= gift && gift <= 50000) {
      $(".ripoff").append('<div>$35,000 Personalized Whac-A-Mole Game</div>');
      $(".ripoff").append('<div class="whac_a_mole"></div>');      
    } else if (50000 <= gift && gift <= 190000) {
      $(".ripoff").append('<div>$50,000 Diamond Encrusted Bluetooth Headset</div>');
      $(".ripoff").append('<div class="headset"></div>');      
    } else if (190000 <= gift) {
      $(".ripoff").append('<div>$190,000 An Actual Hovercraft</div>');
      $(".ripoff").append('<div class="hovercraft"></div>');      
    }
  });

});
