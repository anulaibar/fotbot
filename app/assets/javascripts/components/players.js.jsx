var Router = ReactRouter;
var Link = Router.Link;

var Players = React.createClass({
  getInitialState: function() {
    return {
      players: []
    };
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
        <div className="g-3-4" />
        <Link to="newPlayer" className="g-1-4 red">New</Link>
        {this.state.players.map(function(player) {
          return(
            <Link to="showPlayer" params={player} key={player.id} className="g-1 purple">
              {player.name}
            </Link>
            );
        })}
      </div>
    );
  }
});

