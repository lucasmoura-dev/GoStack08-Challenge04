/** Toda vez que for usar a sintaxe do JSX (html no código), deverá
 * ser usada a biblioteca do react
 */
import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  )
}

export default App;
