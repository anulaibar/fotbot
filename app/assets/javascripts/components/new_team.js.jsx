var NewTeam = React.createClass({
  getInitialState: function() {
    return { showForm: false };
  },
  handleClick: function(e) {
    e.preventDefault();
    this.setState({showForm: !this.state.showForm})
  },
  handleCreate: function(team) {
    this.setState({showForm: false});
    // Pass the newly created team on up to the teams component
    // so that it can be added to the teams list
    this.props.onCreate(team);
  },
  render: function() {
    var classes = this.state.showForm ? 'create-team' : 'create-team hide';
    return (
      <div>
        <div className="pure-g">
          <div className="pure-u-2-3">&nbsp;</div>
          <a href="" onClick={this.handleClick} className="pure-u-1-3 light-black">New</a>
        </div>
        <div className={classes}>
          <CreateTeam onCreate={this.handleCreate}/>
        </div>
      </div>
    );
  }
});
