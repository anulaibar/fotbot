class TeamsController < ApplicationController

  def index
    teams = Team.all
    sorted = teams.sort{ |t1,t2| t2.updated_at <=> t1.updated_at }
    render json: sorted
  end

  def show
    team = Team.find_by_id(params[:id])
    if(team)
      render json: team
    else
      render json: {}, status: 400
    end
  end

  def create
    team = Team.new(team_params)
    if(team.valid?)
      team.save
      render json: team
    else
      render json: {errors: team.errors.full_messages}, status: 400
    end
  end

  def update
    team = Team.find_by_id(params[:id])
    if(team)
      team.attributes = team_params
      if(team.valid?)
        team.save
        render json: {}
      else
        render json: {}, status: 400
      end
    else
      render json: {}, status: 400
    end
  end

  def destroy
    team = Team.find_by_id(params[:id])
    if(team)
      team.destroy
      render json: {}
    else
      render json: {}, status: 400
    end
  end

  private
  def team_params
    params.require(:team).permit(:name, :color)
  end
end
