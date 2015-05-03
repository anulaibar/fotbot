var Team = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    color: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="hot-pink">
        <div>Name: {this.props.name}</div>
        <div>Color: {this.props.color}</div>
      </div>
    );
  }
});

