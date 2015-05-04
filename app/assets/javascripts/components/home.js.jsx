var Router = ReactRouter;
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="teams">Teams</Link>
      </div>
    );
  }
});

