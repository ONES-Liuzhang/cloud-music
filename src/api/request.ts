import { axiosInstance } from "./config";
import { SingerListRequestParams } from "./type";

/** 获取banner列表 */
export const getBannerRequest = () => axiosInstance.get("/banner");

/** 获取推荐列表 */
export const getRecommendListRequest = () => axiosInstance.get("/personalized");

/** 获取歌手 */
export const getSingerListRequest = ({
  category = "",
  alpha = "",
  count = 30,
}: SingerListRequestParams) =>
  axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  );
