import styled from "styled-components";
import style from "../../assets/global-style";

export const List = styled.div`
  display: inline-flex;
  white-space: nowrap;
  align-items: center;
  height: 60px;
  > span:first-of-type {
    padding: 5px 0px;
    margin-right: 5px;
    color: gray;
    font-size: ${style["font-size-m"]};
  }
`;

export const ListItem = styled.span`
  padding: 5px 8px;
  color: gray;
  font-size: ${style["font-size-m"]};
  border-radius: 10px;
  &.selected {
    color: ${style["theme-color"]};
    border: 1p solid ${style["theme-color"]};
  }
`;
