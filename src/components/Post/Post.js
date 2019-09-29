import React, { Component } from 'react';

import './Post.css';

import Lili from '../../assets/images/dogs/lili.jpg';

import Comment from '../Comment/Comment';

class Post extends Component {
  render() {
    return (
      <div class="post">
        <div className="header">
          <img class="avatar" src={Lili} />
          <div class="info">
            <div class="author">Lili Moura</div>
            <div class="date">29 Set 2019</div>
          </div>
        </div>
        <div class="content">
          Pessoal, alguém sabe se a Rocketseat está contratando?
        </div>
        <div className="comments">
          <Comment />
        </div>
      </div>
    );
  }
}

export default Post;