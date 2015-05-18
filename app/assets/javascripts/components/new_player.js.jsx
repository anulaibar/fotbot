var NewPlayer = React.createClass({
  getInitialState: function() {
    return { showForm: false };
  },
  handleClick: function(e) {
    e.preventDefault();
    this.setState({showForm: !this.state.showForm})
  },
  handleCreate: function(player) {
    this.setState({showForm: false});
    // Pass the newly create player on up to the players component
    // so that it can be added to the players list
    this.props.onCreate(player);
  },
  render: function() {
    var classes = this.state.showForm ? 'create-player' : 'create-player hide';
    return (
      <div>
        <div className="g-2-3 light-purple">&nbsp;</div>
        <a href="" onClick={this.handleClick} className="g-1-3 dark-purple">New</a>
        <div className={classes}>
          <CreatePlayer onCreate={this.handleCreate}/>
        </div>
      </div>
    );
  }
});
