import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import Text from './Text';

// className props를 받아야 styled-components로 스타일을 확장할 수 있다.
const Sidebar = ({ items, className }) => {
  const location = useLocation();

  return (
    <SidebarContainer className={className}>
      {items.map((item, index) => (
        <SidebarItem key={index} onClick={item.onClick}>
          <ItemTitle>{item.label}</ItemTitle>
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.ul`
  display: inline-block;
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.theme.color.background.footer};
  border: 1px solid ${({ theme }) => theme.color.footerGray};
  /* box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.color.darkGray}; */
`;

// SidebarContainer의 자식 컴포넌트 SidebarItem의 스타일을 다른 컴포넌트에서도 변경하기 위해서
export const SidebarItem = styled.li`
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  cursor: pointer;
  /* border-bottom: 0.1px solid ${({ theme }) => theme.color.lightBlue}; */
  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.color.background.footer)};
  }
`;

const ItemTitle = styled(Text).attrs({
  font: 'large',
})``;
