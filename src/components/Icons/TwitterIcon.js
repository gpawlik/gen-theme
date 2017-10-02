import React from 'react';
import PropTypes from 'prop-types';

function TwitterIcon({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 502.548 502.548">
      <path fill={color} d="M490.932 91.474c1.133-3.4 1.7-7.083 1.7-10.767 0-18.417-14.733-33.717-33.15-34h-2.833c-5.1.283-9.918 1.7-14.168 3.967-1.417.567-2.55 1.417-3.683 1.983l-1.7.85c-8.784 3.4-17.85 6.8-27.2 10.2-15.584-11.333-34-19.833-55.818-24.65-2.55-.567-5.1-1.417-7.65-1.417H322.35c-2.834 0-5.95 1.133-8.784 1.7-18.983 5.1-38.817 12.183-56.95 27.2-24.65 20.683-39.667 47.033-44.483 77.35-49.583-10.483-90.667-34.567-124.383-75.083-6.517-7.65-15.867-11.333-26.067-11.333-9.917 0-19.55 3.967-26.067 11.617-18.7 22.384-25.783 51.85-19.833 83.868 1.7 8.783 4.25 17.567 7.65 26.35-4.533 5.1-7.367 11.333-8.217 18.133-3.967 32.3 7.65 62.618 32.583 87.834-1.134 4.817-1.418 9.633-.284 14.45 4.25 22.1 15.583 41.083 32.867 55.817-10.483 2.268-21.817 3.684-33.717 3.684-3.4 0-6.8 0-10.2-.283h-2.55c-14.733 0-28.05 9.634-32.3 23.8-4.817 15.018 1.417 31.45 15.017 39.384 1.133.567 2.267 1.417 3.4 1.983 2.833 1.7 6.233 3.683 9.633 5.667 43.633 23.233 90.1 35.133 137.7 35.133 17.567 0 35.417-1.7 53.267-4.817 58.083-10.2 109.933-36.833 150.167-76.217s68.283-91.517 80.75-150.167c2.833-13.6 3.967-26.917 4.817-39.667.283-4.818.567-9.35 1.133-13.884 14.733-13.033 27.483-26.917 38.533-42.783 3.967-5.667 6.517-12.467 6.517-19.833-.002-10.482-4.535-19.832-11.618-26.066zm-60.917 67.434c-2.833 2.55-5.1 7.367-5.667 11.333-2.267 18.7-2.267 37.968-6.233 56.1-22.95 106.534-99.45 181.618-203.717 200.318-15.867 2.833-31.733 4.25-47.317 4.25-42.216 0-82.732-10.483-121.55-31.167-3.966-1.982-7.65-4.532-11.616-6.8 4.25.284 8.5.568 12.75.568 50.717 0 96.9-21.533 114.183-39.1-44.483-6.8-73.95-29.75-79.9-60.633 11.617-.567 23.233-1.417 35.133-1.983-47.317-22.667-71.117-54.4-66.867-90.1 11.333 2.833 22.95 5.667 34.283 8.5-37.4-39.95-47.033-89.817-21.817-119.567 47.882 56.95 109.366 87.267 184.45 92.367-.284-2.267-.568-3.683-.568-5.1-3.683-34 6.233-63.183 33.15-85.567 12.75-10.767 28.05-15.017 43.917-20.683h24.082c20.4 5.667 38.817 13.6 54.4 28.05.85.567 2.267 1.417 3.683 1.417.85 0 1.983 0 2.55-.284 14.167-5.1 28.333-10.2 42.5-15.583 2.55-1.133 5.1-2.55 9.067-4.533-7.933 20.967-20.683 35.7-37.4 47.317.283.567.567 1.417 1.133 1.983 15.017-4.25 30.317-8.5 46.183-13.033-11.33 16.147-24.08 29.747-38.813 41.93z"/>
    </svg>
  );
}

TwitterIcon.defaultProps = {
  width: 22,
  height: 22,
  color: '#fff'
};

TwitterIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default TwitterIcon;

/*
<svg width={width} height={height} viewBox="0 0 112.197 112.197">
  <circle cx="56.099" cy="56.098" r="56.098" fill="#55ACEE"/>
  <path d="M90.46 40.316c-2.403 1.066-4.99 1.787-7.7 2.11 2.768-1.66 4.893-4.285 5.896-7.418-2.59 1.537-5.462 2.652-8.515 3.253-2.445-2.604-5.93-4.232-9.79-4.232-7.403 0-13.408 6.005-13.408 13.41 0 1.05.12 2.073.35 3.055-11.145-.56-21.026-5.897-27.64-14.012-1.154 1.98-1.816 4.286-1.816 6.743 0 4.65 2.37 8.757 5.965 11.16-2.196-.068-4.265-.67-6.072-1.678v.17c0 6.497 4.623 11.916 10.756 13.147-1.124.308-2.31.47-3.532.47-.866 0-1.705-.082-2.523-.238 1.705 5.326 6.656 9.203 12.525 9.312-4.59 3.597-10.37 5.74-16.655 5.74-1.08 0-2.15-.063-3.197-.188 5.93 3.806 12.98 6.025 20.553 6.025 24.664 0 38.152-20.432 38.152-38.153 0-.58-.013-1.16-.04-1.734 2.623-1.89 4.896-4.25 6.693-6.94z" fill="#F1F2F2"/>
</svg>
*/