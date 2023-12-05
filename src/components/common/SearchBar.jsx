import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const SearchBar = ({ onSearchRequest, className }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const submitSearch = () => {
    // if (query) {
    //   dispatch(__searchGroups(query));
    // }
  };

  // 엔터키 입력 시 검색 가능하도록 설정
  const submitSearchEnter = (e) => {
    if (e.key === 'Enter') {
      submitSearch();
    }
  };
  return (
    <SearchContainer className={className}>
      <SearchInput
        type="text"
        value={query}
        onChange={handleSearch}
        onKeyPress={submitSearchEnter}
        placeholder="Search groups..."
      />
      <Button search onClick={submitSearch}>
        검색
      </Button>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  ${({ theme }) => theme.FlexItemCenter}
`;

const SearchInput = styled(Input)`
  height: 2.5rem;
  padding: 0.625rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 1px solid ${(props) => props.theme.color.border.border1};
  font-family: 'scdream4';
  box-sizing: border-box; // 테두리 기준 크기
  &:focus {
    // 입력 중일 때의 스타일을 설정합니다.
    border: 1px solid ${(props) => props.theme.color.border.border3}; // 테두리 색상을 변경합니다.;
    outline: none; // focus시 테두리 없애기
  }
`;
