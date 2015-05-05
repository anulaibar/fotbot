require 'rails_helper'

RSpec.describe PlayersController, type: :controller do

  describe 'GET /index' do
    let(:players) { [ Player.new(id: 1, name: 'C3PO', avatar: 'http://ro.bot/c3po', team_id: 1) ] }
    it 'returns all players' do
      allow(Player).to receive(:all).and_return(players)
      get :index
      expect(response.body).to eq(players.to_json)
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
    context 'with valid params' do
      let(:player) { double() }
      let(:params) { {player: {name: 'R2D2'}} }
      it 'returns ok' do
        expect(Player).to receive(:new) { player }
        expect(player).to receive(:valid?) { true }
        expect(player).to receive(:save)
        post :create, params
        expect(response.status).to eq(200)
      end
    end
    context 'with invalid params' do
      let(:params) { {player: {name: nil}} }
      it 'returns bad request' do
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
