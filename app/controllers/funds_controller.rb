class FundsController < ApplicationController

  def create
    @present_value = params[:present_value].gsub(",", "").to_i
    @pmt = params[:pmt].gsub(",","").to_i
    @age = params[:age].to_i
    
    if params[:fund_ticker].empty?
      @exp_ratio = params[:expense_ratio].to_f
    else
      @exp_ratio = Fund.new.get_expense(params[:fund_ticker]).to_f
    end

    respond_to do |format|
      format.js
    end
  end

end
