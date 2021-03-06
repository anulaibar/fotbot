var Router = ReactRouter;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header black">
          <Link className="logo" to="home">
          </Link>
        </div>
        <div className="main">
          <RouteHandler/>
        </div>
        <div className="footer black">
          Robots by <a href="http://robohash.org">Robohash.org</a>
        </div>
      </div>
    );
  }
});

