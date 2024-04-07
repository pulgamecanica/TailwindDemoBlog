class Author < ApplicationRecord
  devise :database_authenticatable,
          :rememberable, :validatable, :trackable

  has_one_attached :avatar
  has_many :posts, class_name: "Authors::Post"
end
