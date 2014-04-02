Rails.application.routes.draw do

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  
  root 'funds#home'
  post '/funds' => "funds#create", defaults: { present_value: "10000", pmt: "1000", age: "35", fund_ticker: "FFFFX" }

end
