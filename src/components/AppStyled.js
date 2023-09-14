import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #3498db;
  margin-bottom: 20px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  flex-grow: 1;
`;
