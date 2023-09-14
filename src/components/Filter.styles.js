import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  label {
    font-size: 16px;
    margin-right: 10px;
  }
  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    width: 100%;
    font-size: 16px;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;
