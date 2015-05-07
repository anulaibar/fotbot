var Router = ReactRouter;
var Link = Router.Link;

var ShowPlayer = React.createClass({
  getInitialState: function() {
    return {
      player: {name: null, avatar: null}
    };
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    // Get player id from the url
    var playerId = this.context.router.getCurrentParams().id;
    var url = 'players/' + playerId;
    $.get(url, function(player) {
      if (this.isMounted()) {
        this.setState({
          player: player
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <div className="avatar">
          <img src={this.state.player.avatar}/>
        </div>
        <div className="g-1 brown">
          {this.state.player.name}
        </div>
      </div>
    );
  }
});

