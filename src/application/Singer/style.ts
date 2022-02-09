import styled from "styled-components"
import globalStyle from "../../assets/global-style"

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f2f3f4;
  transform-origin: right bottom;
  z-index: 100;
  overflow: hidden;
  &.fly-enter, &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }

  &.fly-enter-active, &.fly-appear-active {
    transition: transform .3s;
    transform: rotateZ(0) translate3d(0, 0, 0)
  }

  &.fly-exit {
    transform: rotateZ(0) translate3d(0, 0, 0)
  }

  &.fly-exit-active {
    transition: transform .3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-top: 75%;
  transform-origin: top;
  background: url(${(props: {bgUrl: string}) => props.bgUrl});
  z-index: -1;
  background-size: cover; // 图片适配并覆盖当前背景区，不会改变图片宽高比例
  .filter {  // 加一层遮罩修饰图片
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(7, 17, 27, 0.3);
  }
`

// 收藏按钮
export const CollectButton = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: auto;
  border-radius: 20px;
  margin-top: -55px;
  z-index: 50;
  color: ${globalStyle["font-color-light"]};
  background: ${globalStyle["theme-color"]};
  .iconfont {
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    vertical-align: 1px;
  }
  .text {
    display: inline-block;
    font-size: 14px;
    letter-spacing: 5px;
  }
`

export const BgLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: 5px;
  z-index: 50;
`

export const SongListWrapper = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  > div {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
`