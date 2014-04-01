class FundsController < ApplicationController
  def create
    @present_value = params[:present_value]
    @pmt = params[:pmt]
    @age = params[:age]
    
    if params[:fund_ticker].empty?
      @exp_ratio = params[:expense_ratio]
    else
      @exp_ratio = Fund.new.get_expense(params[:fund_ticker])
    end

    respond_to do |format|
      format.js
    end
  end
end
