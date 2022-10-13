class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :date
      t.text :title

      t.timestamps
    end
  end
end
