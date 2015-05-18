var Router = ReactRouter;
var Link = Router.Link;

var ShowPlayer = React.createClass({
  mixins: [Router.Navigation],

  getInitialState: function() {
    return {
      player: {name: null, avatar: null}
    };
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  handleClick: function() {
    // Get player id from the url
    var playerId = this.context.router.getCurrentParams().id;
    var url = 'players/' + playerId;
    $.ajax({
      url: url,
      type: 'DELETE',
      success: function(data) {
        this.transitionTo('players');
      }.bind(this),
      error: function(xhr) {
        console.error(xhr.responseJSON.errors.toString());
      }.bind(this)
    });
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
        <div className="avatar g-1 light-purple">
          <img src={this.state.player.avatar}/>
        </div>
        <div className="g-1 purple">
          {this.state.player.name}
        </div>
        <button className="g-1 red" onClick={this.handleClick}>
          Delete
        </button>
        <div className="g-2-3 light-purple">&nbsp;</div>
        <Link to="players" className="g-1-3 dark-purple">Back</Link>
      </div>
    );
  }
});

