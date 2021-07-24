import styled from "styled-components";
import style from "../../assets/global-style";

export const ListWapper = styled.div`
  .title {
    line-height: 60px;
    font-weight: 500;
    font-size: 14px;
    padding-left: 6px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListItem = styled.div`
  width: 32%;
  position: relative;

  .img_wrapper {
    position: relative;
    height: 0px;
    padding-bottom: 100%;
    .decorate {
      position: absolute;
      height: 35px;
      left: 0px;
      right: 0px;
      top: 0px;
      border-radius: 3px;
      background: linear-gradient(hsla(0, 0%, 43%, 0.4), hsla(0, 0%, 100%, 0));
    }
    .play_count {
      top: 2px;
      right: 2px;
      line-height: 15px;
      position: absolute;
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-light"]};
    }
    img {
      position: absolute;
      border-radius: 3px;
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    overflow: hidden;
    margin-top: 2px;
    font-size: ${style["font-size-s"]};
    height: 50px;
    padding: 0px 2px;
    line-height: 1.4;
    color: ${style["font-color-desc"]};
    text-align: left;
  }
`;
