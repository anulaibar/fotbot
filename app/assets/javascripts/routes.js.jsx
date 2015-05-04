var Router = ReactRouter;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="teams" path="teams" handler={Teams} />
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
