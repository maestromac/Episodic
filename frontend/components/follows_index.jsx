const React = require('react'),
      FollowsIndexItem = require('./follows_index_item');

const FollowsIndex = React.createClass({
  render () {
    return (
      <div>
        {
          this.props.users.map( (user, idx) => {
            return <FollowsIndexItem
                      user={user}
                      key={idx}/>;
          })
        }
      </div>
    );
  }
});

module.exports = FollowsIndex;
