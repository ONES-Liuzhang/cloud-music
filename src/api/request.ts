import { axiosInstance } from "./config";
import { SingerListRequestParams } from "./type";

/** 获取banner列表 */
export const getBannerRequest = () => axiosInstance.get("/banner");

/** 获取推荐列表 */
export const getRecommendListRequest = () => axiosInstance.get("/personalized");

/** 获取热门歌手 */
export const getHotSingerListRequest = (count: number, limit = 20) =>
  axiosInstance.get(`/top/artists?offset=${count}&limit=${limit}`);

/** 获取歌手 */
export const getSingerListRequest = ({
  category = "",
  alpha = "",
  count = 0,
  limit = 20,
}: SingerListRequestParams) =>
  axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}&limit=${limit}`
  );
