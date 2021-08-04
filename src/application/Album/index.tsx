import React, { useEffect, useRef, useState } from "react";
import { Container } from "./style";
import { CSSTransition } from "react-transition-group";
import { RouteComponentProps } from "react-router";

function Album(props: RouteComponentProps) {
  const [showStatus, setShowStatus] = useState(true);
  const ref = useRef<HTMLDivElement | undefined>();

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      unmountOnExit
      appear={true}
      onExited={props.history.goBack}
    >
      <Container ref={ref}>aaaa</Container>
    </CSSTransition>
  );
}

export default React.memo(Album);
