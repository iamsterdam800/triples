import React, { Component } from 'react';

class Triples extends Component {

  render() {
    const num = this.props.num == null ? null : parseInt( this.props.num );

    if (!num) return <div/>;

    return (
      <div>
        <br/>
        <h5>Triples for { num } participants</h5>
      </div>
    );
  }

}

export default Triples;