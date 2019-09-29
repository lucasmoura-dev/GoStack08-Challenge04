import React, { Component } from 'react';

import './PostList.css';

import Post from '../Post/Post';

class PostList extends Component {
  render() {
    return (
      <div class="post-list">
        <Post />
      </div>
    );
  }
}

export default PostList;