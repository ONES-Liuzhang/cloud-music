import styled from "styled-components";
import style from "../../assets/global-style";

export const SliderContainer = styled.div`
  position: relative;
  background: white;
  box-sizing: border-box;
  .before {
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: ${style["theme-color"]};
  }
  .slider-container {
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .slide-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .swiper-pagination-bullet-active {
    background: ${style["theme-color"]};
  }
`;
