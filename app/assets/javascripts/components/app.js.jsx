var Router = ReactRouter;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header">
          <Link to="/">Home</Link>
        </div>
        <div className="main">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

