class Fund < ActiveRecord::Base
require 'open-uri'

  def get_expense(fund_name)
    page = Nokogiri::HTML(open("http://quotes.morningstar.com/fund/c-header?&t=XNAS:#{fund_name}&region=usa&culture=en-US&cur=USD"))
    exp_ratio = page.css("td span[@vkey = 'ExpenseRatio']").text.strip.chop
  end

end
