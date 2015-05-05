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
      <ul className="hot-pink">
        {this.state.players.map(function(player) {
          return(
            <div key={player.id}>
              <p>
                <b>Name:</b> <i>{player.name}</i>
              </p>
            </div>
            );
        })}
      </ul>
    );
  }
});

