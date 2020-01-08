import React from 'react';

class Ninjas extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <div className="Ninja">
        <div>Name: Ryu</div>
        <div>Age: 30</div>
        <div>Belt: Black</div>
      </div>
    );
  }
}

export default Ninjas;