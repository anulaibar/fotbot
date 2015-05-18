class Team < ActiveRecord::Base
  validates :color, presence: true
end
