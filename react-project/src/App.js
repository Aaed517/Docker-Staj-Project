import React from 'react';
import List from './BookList'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom';
import BookLibary from './booklibarylist'
import NotFound from './NotFound'
import writer from './writersave'
import type from './typesave'
import book from './booksave'
function App() {
  return (

    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/LibaryBooks" component={BookLibary}/>
        <Route exact path="/writer" component={writer}></Route>
        <Route exact path="/type" component={type}></Route>
        <Route exact path="/book" component={book}></Route>
        <Route component={NotFound}/>
      </Switch>

    </div>

  );
}

export default App;
