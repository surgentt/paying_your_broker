class FundsController < ApplicationController

  def home
  end

  def create
    @present_value = params[:present_value].gsub(",", "").to_i
    @pmt = params[:pmt].gsub(",","").to_i
    @age = params[:age].to_i
    @exp_ratio = Fund.new.get_expense(params[:fund_ticker]).to_f

    respond_to do |format|
      format.js
    end
  end

end
