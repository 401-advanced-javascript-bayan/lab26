import React from 'react';
import './App.scss';

import Header from '../src/modules/header.js'
import Footer from '../src/modules/footer.js'
import Main from '../src/modules/main.js'

// dummy component - it is also a functional component

// also a dummy component and functional component

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
