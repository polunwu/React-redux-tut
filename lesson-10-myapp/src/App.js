import React from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends React.Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let updatedNinjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: updatedNinjas
    });
  }
  deleteNinja = (id) => {
    let updatedNinjas = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setState({
      ninjas: updatedNinjas
    });
  }
  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App" >
        <h1>My First React App</h1>
        <p>*** Welcom :D ***</p>
        <AddNinja addNinja={this.addNinja} />
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
      </div>
    );
  }
}

export default App;
