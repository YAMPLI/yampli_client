import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

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
      <StyledInput
        type="text"
        value={query}
        onChange={handleSearch}
        onKeyPress={submitSearchEnter}
        placeholder="Search groups..."
      />
      <SearchButton onClick={submitSearch}>검색</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  ${({ theme }) => theme.FlexItemCenter}
`;

const StyledInput = styled.input`
  /* width: 70%; */
  padding: 10px;
  height: 2.5rem;
  border-radius: 8px 0px 0px 8px;
  background-color: transparent; // 배경색 삭제
  border: 1px solid ${({ theme }) => theme.color.charcoalGray};
  color: ${({ theme }) => theme.color.offWhite};
  ${({ theme }) => theme.Font('alert', '1rem')}
  box-sizing: border-box; // 테두리 기준 크기

  &:focus {
    // 입력 중일 때의 스타일을 설정합니다.
    border: 3px solid ${({ theme }) => theme.color.softGray}; // 테두리 색상을 변경합니다.;
    outline: none; // focus시 테두리 없애기
  }
`;

const SearchButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;

  border-radius: 0px 4px 4px 0px;
  border: none;
  background-color: ${({ theme }) => theme.color.charcoalGray};
  ${({ theme }) => theme.Font('alert', '14px')};
  color: ${({ theme }) => theme.color.offWhite};
  cursor: pointer;
`;
