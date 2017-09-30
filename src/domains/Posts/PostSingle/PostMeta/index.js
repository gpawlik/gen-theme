import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative, FormattedMessage } from 'react-intl';

import MetaBox from './MetaBox';
import MetaItem from './MetaItem';

const PostMeta = ({ commentsNumber, date = Date.now() }) => {
  return (
    <MetaBox>
      <MetaItem>
        <FormattedRelative
          value={date}
        />
      </MetaItem>
      <MetaItem>
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
      </MetaItem>
    </MetaBox>
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
