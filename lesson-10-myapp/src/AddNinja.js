import React from 'react';

class AddNinja extends React.Component {
  state = {
    name: "",
    age: null,
    belt: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} required />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} required />
          <label htmlFor="belt">Belt:</label>
          <input type="text" id="belt" onChange={this.handleChange} required />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;