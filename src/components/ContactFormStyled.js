import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #f6f8fa;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 0 auto;

  h2 {
    margin-bottom: 15px;
    font-size: 24px;
    color: #333;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    font-size: 18px;
    color: #333;
  }

  input[type='text'],
  input[type='tel'] {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    width: 100%;
  }

  button[type='submit'] {
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #2980b9;
    }
  }
`;

export const FilterContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  label {
    font-size: 18px;
    color: #333;
  }

  input[type='text'] {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    width: 100%;
  }
`;

export const ContactListContainer = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 15px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-child {
      border-bottom: none;
    }
  }

  .contact-name {
    font-size: 18px;
    color: #333;
  }

  .contact-number {
    font-size: 16px;
    color: #666;
  }

  .delete-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

export const NoContactsMessage = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;
