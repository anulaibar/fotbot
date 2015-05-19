var Router = ReactRouter;
var Link = Router.Link;

var Teams = React.createClass({
  getInitialState: function() {
    return {
      teams: []
    };
  },
  handleCreate: function(team) {
    var teams = this.state.teams;
    teams.unshift(team);
    this.setState({teams: teams});
  },
  componentDidMount: function() {
    $.get('teams', function(teams) {
      if (this.isMounted()) {
        this.setState({
          teams: teams
        });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <NewTeam onCreate={this.handleCreate}/>
        <div className="pure-g">
          {this.state.teams.map(function(team) {
            return(
              <Link to="showTeam" params={team} key={team.id} className={"pure-u-1 team " + team.color}>
              </Link>
              );
          })}
        </div>
      </div>
    );
  }
});
