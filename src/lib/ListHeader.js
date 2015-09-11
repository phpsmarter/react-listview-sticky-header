import React, {Component} from 'react';

const styles = {
  width: '50%',
  height: '40%',
  background: 'blue',
  color: 'white'
};

export default class ListHeader extends Component {
 static propTypes = {
    header: React.PropTypes.string.isRequired
  };

  render() {
    const { header } = this.props;
    return (
      <div style={styles}>
        <span>{header}<br /></span>
      </div>
    );
  }  
}