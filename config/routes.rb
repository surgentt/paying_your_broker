Rails.application.routes.draw do

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  
  root 'funds#home'
  post '/funds' => "funds#create"

end
