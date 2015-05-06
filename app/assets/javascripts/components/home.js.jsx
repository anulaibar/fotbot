var Router = ReactRouter;
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="teams" className="g-1-2 purple">Teams</Link>
        <Link to="players" className="g-1-2 pink">Players</Link>
      </div>
    );
  }
});

