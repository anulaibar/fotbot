var NewPlayer = React.createClass({
  getInitialState: function() {
    return { showForm: false };
  },
  handleClick: function(e) {
    e.preventDefault();
    this.setState({showForm: !this.state.showForm})
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.name).value.trim();
    var data = {player: {name: name}};
    $.ajax({
      url: 'players',
      dataType: 'json',
      method: 'POST',
      data: data,
      context: this
    })
    .done(function(response) {
      this.props.onCreate(response);
    })
    .fail(function(xhr) {
      console.error(xhr.responseJSON.errors.toString());
    })
    .always(function() {
      this.setState({showForm: false});
    })
  },
  render: function() {
    var hideClass = this.state.showForm ? '' : 'hide';
    return (
      <div>
        <div className="g-3-4" />
        <a href="" onClick={this.handleClick} className="g-1-4 purple">New</a>
        <div className={hideClass}>
          <form onSubmit={this.handleSubmit}>
            <input className="g-1-2" ref="name" placeholder="Enter name"/>
            <button className="g-1-2 green">Create</button>
          </form>
        </div>
      </div>
    );
  }
});
