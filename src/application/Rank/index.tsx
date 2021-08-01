import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppDispatch } from "../../store";
import { getRankList } from "./store";
function Rank(props: PropsFromRedux) {
  const { rankList, loading } = props;

  const { getRankListDispatch } = props;

  return <div>Rank</div>;
}

const mapStateToProps = (state: any) => ({
  rankList: state.getIn(["rank", "rankList"]),
  loading: state.getIn(["rank", "loading"]),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getRankListDispatch() {
    // dispatch(getRankList());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(React.memo(Rank));
