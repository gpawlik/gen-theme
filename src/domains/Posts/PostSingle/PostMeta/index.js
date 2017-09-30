import React from 'react';
import PropTypes from 'prop-types';

import { FormattedRelative, FormattedMessage } from 'react-intl';

const PostMeta = ({ commentsNumber, date = Date.now() }) => {
  return (
    <p>
      <span>
        <FormattedMessage
          id="comments"
          defaultMessage={
            `{commentsCount, number}
            {
              commentsCount,
              plural,
              one {comment}
              other {comments}
            }`
          }
          values={{commentsCount: commentsNumber}}
        />
      </span> -
      <span>
        <FormattedRelative
          value={date}
        />
      </span>
    </p>
  );
};

PostMeta.propTypes = {
  commentsNumber: PropTypes.number,
  date: PropTypes.string
};

PostMeta.defaultProps = {
  commentsNumber: 0
};

export default PostMeta;
