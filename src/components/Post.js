import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = ({ author, time, content }) => (
  <div className="post-content">
    <PostHeader author={author} time={time} />
    <hr className="line" />
    <p>{content}</p>
  </div>
);

Post.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default Post;
