import styled from "styled-components";
import style from "../../assets/global-style";

interface ListProps {
  globalRank: boolean;
}

interface ListItemProps {
  tracks: Array<any>;
}

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  top: 94px;
  width: 100%;
  .title {
    margin: 10px 5px;
    padding-top: 10px;
    font-weight: 700;
    font-size: ${style["font-size-m"]};
  }
`;

export const List = styled.ul`
  display: ${(props: ListProps) => (props.globalRank ? "flex" : "")};
  margin-top: 10px;
  padding: 0px 5px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  /* 处理最后一行的展示问题 */
  &::after {
    content: "";
    width: 32vw;
  }
`;

export const ListItem = styled.li`
  display: ${(props: ListItemProps) => (props.tracks.length ? "flex" : "")};
  padding: 3px 0px;
  border-bottom: 1px solid ${style["border-color"]};
  .img_wrapper {
    width: ${(props: ListItemProps) => (props.tracks.length ? "27vw" : "32vw")};
    height: ${(props: ListItemProps) =>
      props.tracks.length ? "27vw" : "32vw"};
    border-radius: 3px;
    position: relative;

    .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 43%, 0.4));
    }

    img {
      height: 100%;
      width: 100%;
      border-radius: 3px;
    }

    /* 更新时间 */
    .update_frequecy {
      position: absolute;
      bottom: 7px;
      left: 7px;
      font-size: ${style["font-size-ss"]};
      color: ${style["font-color-light"]};
    }
  }
`;

export const SongList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  font-size: ${style["font-size-ss"]};
  color: gray;
  padding: 10px;
`;
