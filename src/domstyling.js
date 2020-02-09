import React from 'react';

class Domstyling extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.cssClass}>
        {this.props.cssClass.includes(':') ? this.props.cssClass.split(":")[1].toLowerCase() : this.props.cssClass.toLowerCase()}
      </div>
    )
  }
}

export default Domstyling;
