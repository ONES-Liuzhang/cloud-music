import styled from "styled-components";

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PullUpLoading = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 60px;
  height: 60px;
  z-index: 100;
`;

export const PullDownLoading = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  height: 30px;
  z-index: 100;
`;
