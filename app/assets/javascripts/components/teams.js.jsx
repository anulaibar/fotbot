var Router = ReactRouter;
var Link = Router.Link;

var Teams = React.createClass({
  getInitialState: function() {
    return {
      teams: []
    };
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
        <div className="g-3-4" />
        <Link to="newTeam" className="g-1-4 red">New</Link>
        {this.state.teams.map(function(team) {
          return(
            <div key={team.id} className={"g-1 " + team.color}>
              {team.name}
            </div>
            );
        })}
      </div>
    );
  }
});

