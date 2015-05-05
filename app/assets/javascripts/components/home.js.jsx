var Router = ReactRouter;
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="teams">Teams</Link>
        <Link to="players">Players</Link>
      </div>
    );
  }
});

