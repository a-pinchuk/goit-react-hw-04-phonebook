import styled from 'styled-components';

export const AddBtn = styled.button`
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: block;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  height: 30px;
  /* line-height: 20px; */
  list-style: none;

  margin-top: 10px;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;

  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus {
    background-color: #f082ac;
  }
`;

export const Form = styled.form`
  padding: 10px;
`;
