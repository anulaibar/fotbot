var CreateTeam = React.createClass({
  getInitialState: function() {
    return { creating: false };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var input = React.findDOMNode(this.refs.color);
    var color = input.value.trim();
    if(color !== ''){
      this.setState({creating: true});
      var data = {team: {color: color}};
      $.ajax({
        url: 'teams',
        dataType: 'json',
        method: 'POST',
        data: data,
        context: this
      })
      .done(function(response) {
        // Pass the newly created team on up the component chain
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
        <input className="pure-u-2-3" ref="color" placeholder="Enter color"/>
        <button className="pure-u-1-3 green">{buttonText}</button>
      </form>
    );
  }
});
