class FundsController < ApplicationController
  def create
    fund_ticker = params[:fund_ticker]
    @present_value = params[:present_value]
    @pmt = params[:pmt]
    @age = params[:age]
    @exp_ratio = Fund.new.get_expense(fund_ticker)
  end
end
