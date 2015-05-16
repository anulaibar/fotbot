require 'rest-client'

class Robohash
  attr_accessor :api_key

  def initialize
    @api_key = ENV['ROBOHASH_API_KEY']
  end

  def fetch(string)
    escaped = URI.escape(string)
    url = "https://robohash.p.mashape.com/index.php?text=#{escaped}"
    begin
      response = RestClient.get url, {:accept => :json, x_mashape_key: api_key}
      image_url = JSON.parse(response.body)['imageUrl']
    rescue RestClient::BadRequest => e
      Rails.logger.error(e)
    end
    image_url || 'robot.png'
  end
end
