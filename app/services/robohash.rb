require 'rest-client'

class Robohash
  attr_accessor :api_key

  def initialize
    if ENV['ROBOHASH_API_KEY']
      @api_key = ENV['ROBOHASH_API_KEY']
    else
      Rails.logger.error('Environment variable ROBOHASH_API_KEY is unset')
    end
  end

  def fetch(string)
    if api_key
      escaped = URI.escape(string)
      url = "https://robohash.p.mashape.com/index.php?text=#{escaped}"
      begin
        response = RestClient.get url, {:accept => :json, x_mashape_key: api_key}
        image_url = JSON.parse(response.body)['imageUrl']
      rescue RestClient::BadRequest => e
        byebug
        Rails.logger.error(e)
      end
    end
    image_url || 'robot.png'
  end
end
