import React from 'react';
import * as icons from '../../assets/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// /**
//  * fill : 영역 내부 색상(background-color와 유사)
//  * stroke : 선 색상
//  */
const Icon = ({ name, color, width, height, onClick, ...rest }) => {
  const SVGIcon = icons[name];

  const IconContainer = styled(SVGIcon)`
    fill: ${color};
    width: ${width};
    height: ${height};
  `;
  return <IconContainer onClick={onClick} {...rest} />;
};

Icon.PropTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  color: 'white',
  width: '22px',
  height: '28px',
};

export default Icon;
