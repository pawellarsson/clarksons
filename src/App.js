import React from 'react';
import './App.css';
import Traversal from './traversal';
import Reactcomp from './reactcomp';
import Domstyling from './domstyling';
import Emailmsg from './emailmsg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Traversal ida="2" idb="4" idc={{parent_id: 5, guid: 0}} />
        <Reactcomp date="2020-02-08" />
        <Domstyling cssClass="SYS:Foo" />
        <Emailmsg />
      </header>
    </div>
  );
}

export default App;
