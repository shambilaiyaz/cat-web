class CreateUserEmails < ActiveRecord::Migration[8.1]
  def change
    create_table :user_emails do |t|
      t.string :email
      t.string :username

      t.timestamps
    end
  end
end
