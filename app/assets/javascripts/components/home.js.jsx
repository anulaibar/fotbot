var Router = ReactRouter;
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="teams" className="g-1-2 teams-button">Teams</Link>
        <Link to="players" className="g-1-2 players-button">Players</Link>
      </div>
    );
  }
});

