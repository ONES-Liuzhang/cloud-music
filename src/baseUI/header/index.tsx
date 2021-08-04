import React, { forwardRef } from "react";
import styled from "styled-components";
import style from "../../assets/global-style";

interface HeaderProps {
  title?: string;
  handleClick?: () => void;
}

const HeaderContainer = styled.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
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

const Header = forwardRef((props: HeaderProps, ref) => {
  const { title, handleClick } = props;
  return (
    <HeaderContainer ref={ref}>
      <i className={`back iconfont`} onClick={handleClick}>
        &#xe655;
      </i>
      <h1>{title}</h1>
    </HeaderContainer>
  );
});

Header.defaultProps = {
  title: "标题",
  handleClick: () => {},
};

export default React.memo(Header);
