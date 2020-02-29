import React from 'react'

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
        <button class = "one" onClick={this.handleClick1}>n +1</button>
        <button class = "two" onClick={this.handleClick2}>n-1</button>
      </section>
    )
  }
}
  export default Main;
  