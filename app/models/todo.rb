class Todo < ApplicationRecord
    belongs_to :user
  
    validates :date, presence: true
    validates :title, length: { minimum: 5 }
  end
