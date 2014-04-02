require 'spec_helper'

describe "getting a amount fucked by Banker", :js => true do 

  it "should show a picture of the present you bought your broker" do 
    visit root_path
    within ".user_input" do 
      fill_in "present_value", with: "300"
      fill_in "pmt",           with: "200"
      fill_in "age",           with: "23"
      fill_in "fund_ticker", with: "FFFFX"
    end
    page.find(".nl-submit").click
    expect(page).to have_content("$139,760")
    expect(page).to have_content("$50,000 Diamond Encrusted Bluetooth Headset")
  end

end

