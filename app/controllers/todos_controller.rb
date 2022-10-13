class TodosController < ApplicationController
  
    def index
      render json: Todo.all
    end
  
    def create
      todo = Todo.new(todo_params)
      if todo.save
        render(json: {todo: todo}, status: 201)
      else
        render(json: { todo: todo }, status: 422)
      end
    end
  
    private
  
    def todo_params
      params.required(:todo).permit(:date, :title)
    end
  
  end