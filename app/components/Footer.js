import React, { Text, View, PropTypes} from 'react-native';
var Button = require('react-native-button');

let Footer = React.createClass({

  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return (
        <Text>
          {name}
        </Text>
      );
    }
    return (
      <Button style={{color: 'blue'}} onPress={() => { this.props.onFilterChange(filter)}}>
        {name}
      </Button>
    )
  },

  render(){
    return(
      <View>
        {this.renderFilter('SHOW_ALL', 'All')}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
      </View>
    );
  }
});

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

export default Footer;
