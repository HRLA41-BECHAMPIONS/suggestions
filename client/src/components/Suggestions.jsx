import React from 'react';
import Slidee2 from './carousel2.jsx';

class Suggestions extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Slidee2 />
      </div>
    );
  }
}

export default Suggestions;
