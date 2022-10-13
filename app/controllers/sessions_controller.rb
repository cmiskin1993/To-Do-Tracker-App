class SessionsController < ApplicationController
# login
def create
    @user = User.find_by_username(params[:username])
    if @user && @user.authenticate(params[:password])
    login_user
    render json: @user, status: :ok
    else
    render json: { errors: ["Username or Password did not match."] }
    end
end

# logout
def destroy
    reset_session
    render json: { errors: ["Successfully logged out"]}, status: :ok
end
end