import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useReducer,
} from "react";
import { fromJS } from "immutable";

type CategoryActions =
  | { type: "singers/change_category"; data: string }
  | { type: "singers/change_alpha"; data: string };

interface CategoryStateJs {
  category: string;
  alpha: string;
}

type CategoryState = ObjWithImmutable<CategoryStateJs>;

export interface CategoryContextVal {
  data: CategoryState;
  dispatch?: Dispatch<CategoryActions>;
}

const initialState = fromJS({
  category: "",
  alpha: "",
}) as CategoryState;

export const CategoryContext: React.Context<CategoryContextVal> = createContext(
  { data: initialState }
);

const reducer = (state: CategoryState, actions: CategoryActions) => {
  switch (actions.type) {
    case "singers/change_category":
      return state.set("category", actions.data);
    case "singers/change_alpha":
      return state.set("alpha", actions.data);
    default:
      return state;
  }
};

export const Data = (props: PropsWithChildren<{}>) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  return React.createElement(
    CategoryContext.Provider,
    {
      value: { data, dispatch },
    },
    props.children
  );
};
