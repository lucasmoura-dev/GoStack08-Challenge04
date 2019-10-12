import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import Comment from '../Comment/Comment';

class Post extends Component {
  static propTypes = {
    author: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  };

  render() {
    const { author, date, content, comments } = this.props;
    console.log(this.props);
    return (
      <div className="post">
        <div className="header">
          <img className="avatar" src={author.avatar} />
          <div className="info">
            <div className="author">{author.name}</div>
            <div className="date">{date}</div>
          </div>
        </div>
        <div className="content">{content}</div>
        <div className="comments">
          {comments.map(comment => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default Post;
