import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = ({ items }) => {
  const location = useLocation();

  return (
    <SidebarContainer>
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
