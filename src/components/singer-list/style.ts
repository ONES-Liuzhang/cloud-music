import styled from "styled-components";
import style from "../../assets/global-style";

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0px;
  margin: 0px 5px;
  border-bottom: 1px solid ${style["border-color"]};
  .img_wrapper {
    margin-right: 20px;
    width: 60px;
    height: 60px;
    img {
      border-radius: 10px;
    }
  }
`;
