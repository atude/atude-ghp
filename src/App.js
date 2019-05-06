import React, { Component } from 'react';
import './App.css';
import DrawerCustom from './components/Drawer.js';

class App extends Component {  
  render() {
  
    return (
      <div>
        {/* DrawerCustom renders everything, check in Drawer.js 
        for redirects into content pages. */}
        <DrawerCustom/>
      </div>
    );
  }
}

export default App;

