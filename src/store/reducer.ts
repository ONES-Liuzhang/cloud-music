import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store";
import { reducer as singersReducer } from "../application/Singers/store";
import { reducer as rankReducer } from "../application/Rank/store";
import { reducer as AlbumReducer } from "../application/Album/store";
import { reducer as SingerReducer } from "../application/Singer/store";
import { reducer as PlayerReducer } from "../application/Player/store";

console.log(recommendReducer, SingerReducer)

const combinedReducers = combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
  album: AlbumReducer,
  singer: SingerReducer,
  player: PlayerReducer
});

export type RootState = ObjWithImmutable<ReturnType<typeof combinedReducers>>;

export default combinedReducers;
