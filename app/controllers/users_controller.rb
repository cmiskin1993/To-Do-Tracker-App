class UsersController < ApplicationController
# signup 
def create
    @user = User.new(user_params)
    if @user.save
    # logs in user
    login_user 
    render json: @user
    else
    render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
end

def show
    if logged_in?
    render json: current_user, status: :ok
    else
    render json: { errors: ["There is currently no user logged in."] }, status: :bad_request
    end
end

private
    def user_params
    params.permit(:username, :password)
    end
end