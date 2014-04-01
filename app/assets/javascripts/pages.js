$(document).ready(function(){
  // Assumptuons
  var growth_rate = 8;
  var vanguard_ratio = 0.17;
  var retirementAge = 65;

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