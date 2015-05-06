var Router = ReactRouter;

var NewTeam = React.createClass({
  mixins: [Router.Navigation],

  handleSubmit: function(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.name).value.trim();
    var data = {team: {name: name}}

    $.ajax({
      url: 'teams',
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(data) {
        this.transitionTo('teams');
      }.bind(this),
      error: function(xhr) {
        console.error(xhr.responseJSON.errors.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="g-1-2" ref="name" placeholder="Enter name"/>
        <button className="g-1-2 green">Create</button>
      </form>
    );
  }
});
