var Router = ReactRouter;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="teams" path="teams" handler={Teams}/>
    <Route name="newTeam" path="teams/new" handler={NewTeam}/>
    <Route name="players" path="players" handler={Players}/>
    <Route name="newPlayer" path="players/new" handler={NewPlayer}/>
    <Route name="showPlayer" path="players/:id" handler={ShowPlayer}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
