import React from 'react';
import './App.scss';
// dummy component - it is also a functional component
const Header = () => {
  return (
    <header className="words-app">
      <h1>Mycounter</h1>
    </header>
  )
}
// also a dummy component and functional component
const Footer = () => {
  return (
    <footer>my cool footer</footer>
  )
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      ctr: 0
    }
  }

  handleClick1 = e => {
    e.preventDefault();
    let ctr = this.state.ctr;
    ++ctr;
    this.setState({ ctr });
  }

  handleClick2 = e => {
    e.preventDefault();
    let ctr = this.state.ctr;
    --ctr;
    this.setState({ ctr });
  }
  render() {
    return (
      <section>
        <h3>{this.state.ctr}</h3>
        <button class ='one' onClick={this.handleClick1}>up</button>
        <button  class='two' onClick={this.handleClick2}>down</button>
      </section>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
