# encoding: UTF-8
require 'rails_helper'

RSpec.describe PlayersController, type: :controller do

  describe 'GET /index' do
    let(:players) { [
      Player.new(id: 1, name: 'Özz', avatar: 'http://ro.bot', team_id: 1),
      Player.new(id: 1, name: 'R2D2', avatar: 'http://ro.bot', team_id: 1)
    ] }
    before do
      expect(Player).to receive(:all).and_return(players)
      get :index
    end
    it 'returns all players' do
      json = JSON.parse(response.body)
      expect(json.count).to eq(players.count)
    end
    it 'orders by name' do
      json = JSON.parse(response.body)
      expect(json.first['name']).to eq('R2D2')
      expect(json.last['name']).to eq('Özz')
    end
  end
  describe 'GET /1' do
    context 'with valid params' do
      let(:player) { Player.new(id: 1, name: 'C3PO', avatar: 'http://ro.bot/c3po', team_id: 1) }
      let(:params) { { id: 1 } }
      it 'returns the player' do
        allow(Player).to receive(:find_by_id).and_return(player)
        get :show, params
        expect(response.body).to eq(player.to_json)
      end
    end
    context 'with invalid params' do
      let(:params) { { id: 1 } }
      it 'returns bad request' do
        allow(Player).to receive(:find_by_id).and_return(nil)
        get :show, params
        expect(response.status).to eq(400)
        expect(response.body).to eq({}.to_json)
      end
    end
  end
  describe 'POST /create' do
    let(:robohash) {double}
    before { expect(Robohash).to receive(:new) { robohash } }
    context 'with valid params' do
      let(:params) { {player: {name: 'R2D2'}} }
      it 'returns ok' do
        player = Player.new(name: 'R2D2')
        expect(Player).to receive(:new) { player }
        expect(robohash).to receive(:fetch).with('R2D2').and_return('http://ro.bot/r2d2')
        expect(player).to receive(:save)
        post :create, params
        expect(response.status).to eq(200)
      end
    end
    context 'with invalid params' do
      let(:params) { {player: {name: nil}} }
      it 'returns bad request' do
        expect(robohash).to receive(:fetch)
        post :create, params
        expect(response.status).to eq(400)
      end
    end
  end
  describe 'PATCH /update' do
    context 'with valid params' do
      let(:player) {  Player.new(id: 1, name: 'R2D2', avatar: 'http://ro.bot/c3po', team_id: 1) }
      let(:params) { {id: 1, player: {name: 'R2D2'}} }
      it 'returns ok' do
        expect(Player).to receive(:find_by_id) { player }
        expect(player).to receive(:save)
        patch :update, params
        expect(response.status).to eq(200)
      end
    end
    context 'with invalid params' do
      let(:player) { Player.new(id: 1, name: 'C3PO', avatar: 'http://ro.bot/c3po', team_id: 1) }
      let(:params) { {id: 1, player: {name: nil}} }
      it 'returns bad request' do
        expect(Player).to receive(:find_by_id) { player }
        patch :update, params
        expect(response.status).to eq(400)
      end
    end
    context 'with missing record' do
      let(:params) { {id: 1, player: {name: 'R2D2'}} }
      it 'returns ok' do
        expect(Player).to receive(:find_by_id) { nil }
        patch :update, params
        expect(response.status).to eq(400)
      end
    end
  end
  describe 'DELETE /destroy' do
    context 'with valid params' do
      let(:player) { Player.new(id: 1, name: 'C3PO', avatar: 'http://ro.bot/c3po', team_id: 1) }
      let(:params) { { id: 1 } }
      it 'returns ok' do
        expect(Player).to receive(:find_by_id) { player }
        delete :destroy, params
        expect(response.status).to eq(200)
      end
    end
    context 'with missing record' do
      let(:params) { { id: 1 } }
      it 'returns bad request' do
        delete :destroy, params
        expect(response.status).to eq(400)
      end
    end
  end
end
