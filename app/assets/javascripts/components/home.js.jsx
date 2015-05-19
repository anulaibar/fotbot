var Router = ReactRouter;
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="pure-g">
        <Link to="players" className="pure-u-1-2 light-black">Players</Link>
        <Link to="teams" className="pure-u-1-2 light-black">Teams</Link>
      </div>
    );
  }
});

