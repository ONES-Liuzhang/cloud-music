import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store";
import { reducer as singersReducer } from "../application/Singers/store";
import { reducer as rankReducer } from "../application/Rank/store";

const combinedReducers = combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
});

export type RootState = ObjWithImmutable<ReturnType<typeof combinedReducers>>;

export default combinedReducers;
