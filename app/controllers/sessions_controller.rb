class SessionsController < ApplicationController
  
  def new ;end
  
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    
    if @user
      login!(@user)
      redirect_to "#/feed"
    else
      @user = User.new
      flash.now[:errors] = ["Invalid Username or Password"]
      render :new
    end
  end
  
  def destroy
    logout!
    redirect_to root_url
  end
  
end
