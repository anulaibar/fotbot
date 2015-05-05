class PlayersController < ApplicationController

  def index
    players = Player.all
    render json: players
  end

  def show
    player = Player.find_by_id(params[:id])
    if(player)
      render json: player
    else
      render json: {}, status: 400
    end
  end

  def create
    player = Player.new(player_params)
    if(player.valid?)
      player.save
      render json: {}
    else
      render json: {}, status: 400
    end
  end

  def update
    player = Player.find_by_id(params[:id])
    if(player)
      player.attributes = player_params
      if(player.valid?)
        player.save
        render json: {}
      else
        render json: {}, status: 400
      end
    else
      render json: {}, status: 400
    end
  end

  def destroy
    player = Player.find_by_id(params[:id])
    if(player)
      player.destroy
      render json: {}
    else
      render json: {}, status: 400
    end
  end

  private
  def player_params
    params.require(:player).permit(:name)
  end
end
