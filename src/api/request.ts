import { axiosInstance } from "./config";
import { SingerListRequestParams } from "./type";

/** 获取banner列表 */
export const getBannerRequest = () => axiosInstance.get("/banner");

/** 获取推荐列表 */
export const getRecommendListRequest = () => axiosInstance.get("/personalized");

/** 获取热门歌手 */
export const getHotSingerListRequest = (count: number, limit = 12) =>
  axiosInstance.get(`/top/artists?offset=${count * limit}&limit=${limit}`);

/** 获取歌手 */
export const getSingerListRequest = ({
  category = "",
  alpha = "",
  count = 0,
  limit = 20,
}: SingerListRequestParams) =>
  axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count * limit}&limit=${limit}`
  );

/** 获取排行榜单 */
export const getRankListRequest = () => axiosInstance.get("/toplist/detail");

/** 根据id 获取歌单 */
export const getAlbumDetailRequest = (id: number) => axiosInstance.get(`/playlist/detail?id=${id}`)

/** 获取歌手 */
export const getSingerRequest = (id: number) => axiosInstance.get(`/artists?id=${id}`)