require 'rails_helper'

RSpec.describe TeamsController, type: :controller do

  describe 'GET /index' do
    let(:teams) { [ Team.new(id: 1, name: 'C3PO', color: 'Gold') ] }
    it 'returns all teams' do
      allow(Team).to receive(:all).and_return(teams)
      get :index
      expect(response.body).to eq(teams.to_json)
    end
  end
  describe 'GET /1' do
    context 'with valid params' do
      let(:team) { Team.new(id: 1, name: 'C3PO', color: 'Gold') }
      let(:params) { { id: 1 } }
      it 'returns the team' do
        allow(Team).to receive(:find_by_id).and_return(team)
        get :show, params
        expect(response.body).to eq(team.to_json)
      end
    end
    context 'with invalid params' do
      let(:params) { { id: 1 } }
      it 'returns bad request' do
        allow(Team).to receive(:find_by_id).and_return(nil)
        get :show, params
        expect(response.status).to eq(400)
        expect(response.body).to eq({}.to_json)
      end
    end
  end
  describe 'POST /create' do
    context 'with valid params' do
      let(:team) { double() }
      let(:params) { {team: {name: 'R2D2', color: 'White'}} }
      it 'returns ok' do
        expect(Team).to receive(:new) { team }
        expect(team).to receive(:valid?) { true }
        expect(team).to receive(:save)
        post :create, params
        expect(response.status).to eq(200)
      end
    end
    context 'with invalid params' do
      let(:params) { {team: {name: nil, color: nil}} }
      it 'returns bad request' do
        post :create, params
        expect(response.status).to eq(400)
      end
    end
  end
  describe 'PATCH /update' do
    context 'with valid params' do
      let(:team) { Team.new(id: 1, name: 'C3PO', color: 'Gold') }
      let(:params) { {id: 1, team: {name: 'R2D2'}} }
      it 'returns ok' do
        expect(Team).to receive(:find_by_id) { team }
        expect(team).to receive(:save)
        patch :update, params
        expect(response.status).to eq(200)
      end
    end
    context 'with invalid params' do
      let(:team) { Team.new(id: 1, name: 'C3PO', color: 'Gold') }
      let(:params) { {id: 1, team: {name: nil}} }
      it 'returns bad request' do
        expect(Team).to receive(:find_by_id) { team }
        patch :update, params
        expect(response.status).to eq(400)
      end
    end
    context 'with missing record' do
      let(:params) { {id: 1, team: {name: 'R2D2'}} }
      it 'returns ok' do
        expect(Team).to receive(:find_by_id) { nil }
        patch :update, params
        expect(response.status).to eq(400)
      end
    end
  end
  describe 'DELETE /destroy' do
    context 'with valid params' do
      let(:team) { Team.new(id: 1, name: 'C3PO', color: 'Gold') }
      let(:params) { { id: 1 } }
      it 'returns ok' do
        expect(Team).to receive(:find_by_id) { team }
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
