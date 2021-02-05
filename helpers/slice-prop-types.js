import PropTypes from 'prop-types';

export const imagePropType = PropTypes.shape({
  dimension: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  alt: PropTypes.string,
  copyright: PropTypes.string,
  url: PropTypes.string
});

export const richTextPropType = PropTypes.arrayOf(
  PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
    spans: PropTypes.array
  })
);
