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
        <div className="pure-g">
          <div className="pure-u-2-3">&nbsp;</div>
          <a href="" onClick={this.handleClick} className="pure-u-1-3 light-black">New</a>
        </div>
        <div className={classes}>
          <CreatePlayer onCreate={this.handleCreate}/>
        </div>
      </div>
    );
  }
});
