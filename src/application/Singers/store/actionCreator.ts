import { getSingerListRequest } from "../../../api/request";
import { SingerListRequestParams } from "../../../api/type";
import { SingerInfo, SingerActionsType } from "./constans";
import { fromJS } from "immutable";

const changeSingerList = (data: SingerInfo) => ({
  type: SingerActionsType.CHANGE_SINGER_LIST,
  data: fromJS(data),
});

const changeEnterLoading = (loading: boolean) => ({
  type: SingerActionsType,
  data: loading,
});

export const getSingerList = (query: SingerListRequestParams) => {
  return (dispatch: any) => {
    getSingerListRequest(query).then(
      (data) => {
        dispatch(changeSingerList(data.artists));
        dispatch(changeEnterLoading(false));
      },
      (err) => {
        console.log("歌手列表获取失败！", err);
      }
    );
  };
};
