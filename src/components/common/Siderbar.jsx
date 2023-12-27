import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';

// className props를 받아야 styled-components로 스타일을 확장할 수 있다.
const Sidebar = ({ items, className }) => {
  const location = useLocation();

  return (
    <SidebarContainer className={className}>
      {items.map((item, index) => (
        <SidebarItem key={index} onClick={item.onClick}>
          <span>{item.label}</span>
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
  border: 1px solid ${(props) => props.theme.color.border.border2};
`;

// SidebarContainer의 자식 컴포넌트 SidebarItem의 스타일을 다른 컴포넌트에서도 변경하기 위해서
export const SidebarItem = styled.li`
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => lighten(0.1, props.theme.color.background.main)};
  }
  span {
    font-size: 1.125rem;
  }
`;
