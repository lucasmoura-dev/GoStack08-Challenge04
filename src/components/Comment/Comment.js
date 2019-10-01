import React from 'react';

import './Comment.css';

function Comment ({ author, content }) {
  return (
    <div className="comment">
      <img className="avatar" src={author.avatar} />
      <div className="content">
        <span className="author">{author.name}</span>
        {content}
      </div>
    </div>
  );
}

export default Comment;