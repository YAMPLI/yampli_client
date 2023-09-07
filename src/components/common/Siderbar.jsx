import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// className props를 받아야 styled-components로 스타일을 확장할 수 있다.
const Sidebar = ({ items, className }) => {
  const location = useLocation();

  return (
    <SidebarContainer className={className}>
      {items.map((item, index) => (
        <SidebarItem key={index} onClick={item.onClick}>
          {item.label}
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  /* 스타일링을 여기에 추가하세요 */
  width: 200px;
  background-color: #333;
  padding: 10px;
  height: 100vh;
`;

const SidebarItem = styled.div`
  /* 스타일링을 여기에 추가하세요 */
  padding: 8px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;
