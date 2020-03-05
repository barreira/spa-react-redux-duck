import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  flex: 1;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;

  button {
    margin-top: 8px;
  }

  & > li {
    padding: 8px 0;

    &:not(:first-child) {
      margin-top: 8px;
      border-top: 1px solid #000;
    }
  }
`;
