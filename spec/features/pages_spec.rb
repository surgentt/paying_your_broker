require 'spec_helper'

describe "getting a amount fucked by Banker", :js => true do 

  it "should output how badly you got fucked by your broker" do 
    visit root_path
    within ".user_input" do 
      fill_in "present_value", with: "300"
      fill_in "pmt",           with: "200"
      fill_in "age",           with: "23"
      fill_in "expense_ratio", with: "1.5"
    end
    click_on "submit"
    expect(page).to have_content("$260,568")
  end

  it "should show picutres" do

    # if payment < 5000
    #   "should include this."
    # elsif payment < 15,000 
    #   "A vegas Trip"
    # elsif payment < 50,000
    #   "A mercedes Benz"
    # elsif payment < 250,000
    #   "A yatch"
    # elsif payment < 500,000
    #   "A mansion"
    # else
  end

end

