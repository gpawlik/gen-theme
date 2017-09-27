import React from 'react';
import PropTypes from 'prop-types';

import Path from './Path';
import Svg from './Svg';

const Spinner = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 66 66">
      <Path fill="none" stroke-linecap="round" cx={width / 2} cy={height / 2} r="30"></Path>
    </Svg>
  );
};

Spinner.defaultProps = {
  width: 66,
  height: 66
};

Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Spinner;
