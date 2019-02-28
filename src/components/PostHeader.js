import React from 'react';

import PropTypes from 'prop-types';

import Moment from 'react-moment';
import 'moment-timezone';
// import 'moment/src/locale/pt-br';

const PostHeader = ({ author, time }) => (
  <div className="post-header">
    <img src={author.avatar} className="avatar" alt="avatar" />
    <div className="info-post-header">
      <b>{author.name}</b>
      <Moment className="time" fromNow tz="America/Fortaleza">
        {new Date(time)}
      </Moment>
    </div>
  </div>
);

PostHeader.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  time: PropTypes.number.isRequired,
};

export default PostHeader;
