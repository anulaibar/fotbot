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
        <div className="pure-u-2-3">
          <div className="pure-g">
            <div className="pure-u-1-5 palette black" onClick={this.handlePaletteClick}/>
            <div className="pure-u-1-5 palette gray"/>
            <div className="pure-u-1-5 palette white"/>
            <div className="pure-u-1-5 palette green"/>
            <div className="pure-u-1-5 palette red"/>
          </div>
          <div className="pure-g">
            <div className="pure-u-1-5 palette blue"/>
            <div className="pure-u-1-5 palette orange"/>
            <div className="pure-u-1-5 palette yellow"/>
            <div className="pure-u-1-5 palette purple"/>
            <div className="pure-u-1-5 palette pink"/>
          </div>
        </div>
        <button className="pure-u-1-3 green">{buttonText}</button>
      </form>
    );
  }
});
