import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <GridContainer>
      <Item>1</Item>
      <Item1>B</Item1>
    </GridContainer>
  );
}

export default Footer;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 150px 55px;
`;

const Item = styled.div`
  background-color: gray;
  grid-column-start: 1;
  grid-column-end: 4;
`;
const Item1 = styled.div`
  background-color: blue;
  grid-column-start: 1;
  grid-column-end: 4;
`;

// const GridItem = styled.div`
//   background-color: gray;
//   border: 2px solid pink;
//   margin: 1px;
// `;

// const SideBar = styled(GridItem)`
//   background-color: white;
//   grid-row: span 3;
// `;
