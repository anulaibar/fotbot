var Router = ReactRouter;
var Link = Router.Link;

var Players = React.createClass({
  getInitialState: function() {
    return {
      players: []
    };
  },
  handleCreate: function(player) {
    var players = this.state.players;
    players.unshift(player);
    this.setState({players: players});
  },
  componentDidMount: function() {
    $.get('players', function(players) {
      if (this.isMounted()) {
        this.setState({
          players: players
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <NewPlayer onCreate={this.handleCreate}/>
        <div className="pure-g gray">
          {this.state.players.map(function(player) {
            return(
              <Link to="showPlayer" params={player} key={player.id} className="pure-u-1 player">
                {player.name}
              </Link>
              );
          })}
        </div>
      </div>
    );
  }
});

