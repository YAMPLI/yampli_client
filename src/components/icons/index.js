import React from 'react';
import * as icons from '../../assets/icons';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// /**
//  * fill : 영역 내부 색상(background-color와 유사)
//  * stroke : 선 색상
//  */

const colorStyles = css`
  ${(props) => {
    console.log(props.color);

    let selectColor;
    selectColor = props.color
      ? props.theme.color[props.color]
      : props.theme.color.offWhite;
    console.log(selectColor);

    return css`
      fill: ${selectColor};
    `;
  }}
`;

// 여기에 모든 스타일드 컴포넌트를 미리 생성합니다.
const StyledIcons = Object.keys(icons).reduce((acc, key) => {
  // 각 아이콘 이름에 맞게 StyledComponent를 생성합니다.
  acc[key] = styled(icons[key])`
    fill: ${(props) =>
      props.theme.color[props.color] || props.theme.color.offWhite};
    width: ${(props) => props.width || '1rem'};
    height: ${(props) => props.height || '1rem'};
    cursor: pointer;
  `;
  return acc;
}, {});

const Icon = ({ name, color, width, height, onClick, ...rest }) => {
  // const SVGIcon = icons[name];

  // const IconContainer = styled(SVGIcon)`
  //   ${colorStyles}
  //   /* fill: ${color}; */
  //   width: ${width};
  //   height: ${height};
  //   cursor: pointer;
  // `;
  // return <IconContainer onClick={onClick} {...rest} />;
  // 이미 생성된 StyledComponent를 참조하여 사용합니다.
  const StyledIcon = StyledIcons[name] || null;

  if (!StyledIcon) {
    // 아이콘이 없을 경우 에러를 처리합니다.
    console.error(`No icon found for name: ${name}`);
    return null;
  }

  return (
    <StyledIcon
      color={color}
      width={width}
      height={height}
      onClick={onClick}
      {...rest}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  // color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  color: 'offWhite',
  width: '22px',
  height: '28px',
};

export default Icon;
