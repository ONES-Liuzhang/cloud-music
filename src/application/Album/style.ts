import styled from "styled-components";
import style from "../../assets/global-style";

interface TopDescProps {
  background: string;
}

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 1001;
  transform-origin: right bottom;
  &.fly-enter,
  &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active,
  &.fly-appear-active {
    transition: transform 0.3s;
    transform: rotateZ(0) translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: rotateZ(0) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform 0.3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`;

export const TopDesc = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 20px;
  padding-bottom: 50px;
  margin-bottom: 20px;
  align-items: center;
  color: ${style["font-color-light"]};
  height: 275px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  background-size: 100%;
  justify-content: space-around;
  .background {
    z-index: -1;
    background: url(${(props: TopDescProps) => props.background}) no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    background-size: 100% 100%;
    background-position: 0 0;
    .filter {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba (7, 17, 27, 0.2);
    }
  }
  .img_wrapper {
    position: relative;
    width: 120px;
    height: 120px;
    img {
      border-radius: 3px;
    }
    .decorate {
      position: absolute;
      top: 0;
      height: 35px;
      border-radius: 3px;
      width: 100%;
      background: linear-gradient(hsla(0, 0%, 43%, 0.4), hsla(0, 0%, 100%, 0));
    }

    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${style["font-size-ss"]};
      line-height: 15px;
      .play {
        vertical-align: top;
      }
    }
  }

  .desc_wrapper {
    flex: 1;
    display: flex;
    margin-left: 10px;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
    .title {
      color: #fff;
      font-weight: 700;
      max-height: 70px;
      line-height: 1.5;
      font-size: ${style["font-size-l"]};
    }
    .person {
      display: flex;
      .avatar {
        width: 20px;
        height: 20px;
        img {
          border-radius: 50%;
          height: 100%;
          width: 100%;
        }
      }
      .name {
        margin-left: 10px;
        line-height: 20px;
        font-size: ${style["font-size-m"]};
        color: ${style["font-color-desc-v2"]};
      }
    }
  }
`;

export const Menu = styled.div`
  color: ${style["font-color-light"]};
  display: flex;
  justify-content: space-between;
  margin: -100px 0 0 0;
  box-sizing: border-box;
  padding: 0 30px 20px 30px;
  > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 500;
    line-height: 20px;
    font-size: ${style["font-size-s"]};
    .iconfont {
      font-size: 20px;
    }
  }
`;

export const SongList = styled.div`
  border-radius: 10px;
  background-color: white;
  .first_line {
    box-sizing: border-box;
    display: flex;
    padding: 10px 0;
    justify-content: space-between;
    border-bottom: 1px solid ${style["border-color"]};
    height: 40px;
    position: relative;
    margin-left: 10px;
    .play_all {
      line-height: 24px;
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }
      .sum {
        margin-left: 10px;
        font-size: ${style["font-size-ss"]};
        color: ${style["font-color-desc-v2"]};
      }
    }

    .add_list {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 130px;
      line-height: 34px;
      border-radius: 3px;
      text-align: center;
      color: ${style["font-color-light"]};
      background: ${style["theme-color"]};
      font-size: ${style["font-size-s"]};
      .iconfont {
        font-size: 14px;
      }
    }
  }
`;

export const SongListItem = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-left: 10px;
  /* padding: 5px 15px;
  padding-right: 0px;
  line-height: 20px; */
  height: 60px;

  .order {
    padding: 20px;
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-bottom: 1px ${style["border-color"]} solid;
    padding: 5px 0;
    justify-content: space-around;
    .title {
    }
    .name {
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-desc-v2"]};
    }
  }
`;
