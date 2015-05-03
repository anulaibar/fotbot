class Team < ActiveRecord::Base
  validates :name, presence: true
  validates :color, presence: true
end
