import React from 'react';

const times = function getTime() {
  return (new Date()).toLocaleTimeString()
}

const CommentDetails = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">
            Today at {times()}
          </span>
        </div>
        <div className="text">
        {props.text}
        </div>
        <div className="actions">
          <a href="/" className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

//agar component ini bisa digunakan secara universal
export default CommentDetails;