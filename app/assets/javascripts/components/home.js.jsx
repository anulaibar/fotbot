var Router = ReactRouter;
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="players" className="g-1-2 light-black">Players</Link>
        <Link to="teams" className="g-1-2 light-black">Teams</Link>
      </div>
    );
  }
});

