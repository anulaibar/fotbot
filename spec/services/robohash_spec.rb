require 'rails_helper'

RSpec.describe Robohash do

  let(:url) { 'http://robohash.p.mashape.com/index.php?text=mama' }

  describe '.fetch' do
    context 'with api key', vcr: {cassette_name: 'robohash'} do

      let(:api_key) { 'sUaqT187lmmshpgL1nChC9gE1Kyjp1cDqsHjsnIa9GnXI1C1Bv' }

      it 'returns a url' do
        robohash = Robohash.new
        robohash.api_key = api_key
        response = robohash.fetch('mama')
        expect(response).to eq('http://bit.ly/1IuOUtq')
      end
    end

    context 'missing api key', vcr: {cassette_name: 'robohash_400'} do

      it 'returns a default url' do
        robohash = Robohash.new
        response = robohash.fetch('mama')
        expect(response).to eq('robot.png')
      end
    end
  end
end
