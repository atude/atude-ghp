import React, { Component } from 'react';
import './App.css';
import DrawerCustom from './components/Drawer.js';
import 'typeface-roboto';

class App extends Component {  
  render() {
  
    return (
      <div style={{overflowX: "hidden"}}>
        {/* DrawerCustom renders everything, check in Drawer.js 
        for redirects into content pages. */}
        <DrawerCustom/>
      </div>
    );
  }
}

export default App;

