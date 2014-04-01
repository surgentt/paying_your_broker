require 'spec_helper'

describe "getting a amount fucked by Banker" do 

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

end