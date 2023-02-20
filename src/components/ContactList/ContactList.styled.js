import styled from 'styled-components';

export const DeleteBtn = styled.button`
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 12px;
  font-weight: 400;
  height: 30px;
  /* line-height: 20px; */
  list-style: none;

  margin-left: 10px;
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
