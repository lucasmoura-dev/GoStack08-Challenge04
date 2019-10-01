import React, { Component } from 'react';

import './Post.css';

import Comment from '../Comment/Comment';

class Post extends Component {
  render() {
    console.log(this.props);
    const { author, date, content, comments } = this.props;
    return (
      <div className="post">
        <div className="header">
          <img className="avatar" src={author.avatar} />
          <div className="info">
            <div className="author">{author.name}</div>
            <div className="date">{date}</div>
          </div>
        </div>
        <div className="content">
          {content}
        </div>
        <div className="comments">
          {comments.map(comment => (
            <Comment 
              key={comment.id}
              author={comment.author}
              content={comment.content}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Post;