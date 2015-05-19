var CreatePlayer = React.createClass({
  getInitialState: function() {
    return { creating: false };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var input = React.findDOMNode(this.refs.name);
    var name = input.value.trim();
    if(name !== ''){
      this.setState({creating: true});
      var data = {player: {name: name}};
      $.ajax({
        url: 'players',
        dataType: 'json',
        method: 'POST',
        data: data,
        context: this
      })
      .done(function(response) {
        // Pass the newly create player on up the component chain
        this.props.onCreate(response);
      })
      .fail(function(xhr) {
        console.error(xhr.responseJSON.errors.toString());
      })
      .always(function() {
        this.setState({creating: false});
        input.value = '';
        input.blur();
      })
    }
  },
  render: function() {
    var buttonText = this.state.creating ? 'Creating...' : 'Create';
    return (
      <form onSubmit={this.handleSubmit} className="pure-g">
        <input ref="name" placeholder="Enter name" className="pure-u-2-3"/>
        <button className="green pure-u-1-3">{buttonText}</button>
      </form>
    );
  }
});
