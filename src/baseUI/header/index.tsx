import React, { forwardRef } from "react";
import styled from "styled-components";
import style from "../../assets/global-style";

interface HeaderProps {
  title?: string;
  handleClick?: () => void;
  isMarquee?: boolean;
}

export const HEADER_HEIGHT = 40

const HeaderContainer = styled.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: ${style["font-color-light"]};
  .back {
    margin-right: 5px;
    width: 20px;
    font-size: 20px;
  }
  > h1 {
    font-size: ${style["font-size-l"]};
    font-weight: 700;
  }
`;

// 走马灯动画
const Marquee = styled.div`
  width: 100%; 
  height: 35px; 
  overflow: hidden; 
  position: relative; 
  white-space: nowrap; 
 .text { 
   position: absolute; 
   animation: marquee 10s linear infinite; 
  } 
  @keyframes marquee { 
    from { 
      transform: translateX(100%); 
    } 
    to { 
      transform: translateX(-100%); 
    }
`

const Header = forwardRef((props: HeaderProps, ref) => {
  const { title, handleClick, isMarquee } = props;
  return (
    <HeaderContainer ref={ref}>
      <i className={`back iconfont`} onClick={handleClick}>
        &#xe655;
      </i>
      {isMarquee ? <Marquee><span className="text">{title}</span></Marquee> : <h1>{title}</h1>}
    </HeaderContainer>
  );
});

Header.defaultProps = {
  title: "标题",
  handleClick: () => {},
  isMarquee: false,
};

export default React.memo(Header);
