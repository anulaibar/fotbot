var Team = React.createClass({
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
      <ul className="hot-pink">
        {this.state.teams.map(function(team) {
          return(
            <div>
              <p>
                <b>Name:</b> <i>{team.name}</i>
              </p>
              <p>
                <b>Color:</b> <i>{team.color}</i>
              </p>
            </div>
            );
        })}
      </ul>
    );
  }
});

