import React, { useEffect, useRef, useState } from "react";
import { Container } from "./style";
import { CSSTransition } from "react-transition-group";
import { RouteComponentProps } from "react-router";
import Header from "../../baseUI/header";
function Album(props: RouteComponentProps) {
  const [showStatus, setShowStatus] = useState(true);
  const ref = useRef<HTMLDivElement | undefined>();

  const handleClickBack = () => {
    setShowStatus(false);
  };

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      unmountOnExit
      appear={true}
      onExited={props.history.goBack}
    >
      <Container ref={ref}>
        <Header title={"返回"} handleClick={handleClickBack} />
      </Container>
    </CSSTransition>
  );
}

export default React.memo(Album);
