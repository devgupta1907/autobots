import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      autobots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ autobots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { autobots, searchField } = this.state;
    const filteredAutobots = autobots.filter(autobot => autobot.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='App'>
        <h1> Autobots </h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList autobots={filteredAutobots} />
      </div>
    );
  }
}

export default App;