var Router = ReactRouter;
var Link = Router.Link;

var ShowTeam = React.createClass({
  mixins: [Router.Navigation],

  getInitialState: function() {
    return {
      team: {name: null, color: null}
    };
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  handleClick: function() {
    // Get team id from the url
    var teamId = this.context.router.getCurrentParams().id;
    var url = 'teams/' + teamId;
    $.ajax({
      url: url,
      type: 'DELETE',
      success: function(data) {
        this.transitionTo('teams');
      }.bind(this),
      error: function(xhr) {
        console.error(xhr.responseJSON.errors.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    // Get team id from the url
    var teamId = this.context.router.getCurrentParams().id;
    var url = 'teams/' + teamId;
    $.get(url, function(team) {
      if (this.isMounted()) {
        this.setState({
          team: team
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div className="pure-g">
        <div className="pure-u-2-3">&nbsp;</div>
        <Link to="teams" className="pure-u-1-3 light-black">Back</Link>
        <div className={"pure-u-2-3 " + this.state.team.color}>
          {this.state.team.color || ''}
        </div>
        <button className="pure-u-1-3 red" onClick={this.handleClick}>
          Delete
        </button>
      </div>
    );
  }
});

