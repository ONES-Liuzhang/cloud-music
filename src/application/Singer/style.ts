import styled from "styled-components"

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
  padding-top: 75%;
`