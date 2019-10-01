import React from 'react';
import PropTypes from 'prop-types';

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

Comment.propTypes = {
  author: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default Comment;