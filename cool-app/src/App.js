import React from 'react';
import './App.scss';
// dummy component - it is also a functional component
const Header = () => {
  return (
    <header className="words-app">
      <h1>my counter</h1>
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
        <button onClick={this.handleClick1}>click for counter</button>
        <button onClick={this.handleClick2}>click for counter</button>
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
