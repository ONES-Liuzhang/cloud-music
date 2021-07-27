import React from "react";
import { HorizenProps } from "../type";
import Scroll from "../scroll";
import { List, ListItem } from "./style";

function Horizen(props: HorizenProps<{ key: string; name: string }>) {
  const { title, list, oldVal } = props;

  const { handleClick } = props;

  return (
    <Scroll direction={"horizental"}>
      <List>
        <span className={"title"}>{title}</span>
        {list.map((item) => (
          <ListItem
            onClick={() => handleClick && handleClick(item.key)}
            className={`${oldVal === item.key ? "selected" : ""}`}
            key={item.key}
          >
            {item.name}
          </ListItem>
        ))}
      </List>
    </Scroll>
  );
}

Horizen.defaultProps = {
  list: [],
  title: "",
  oldVal: "",
  handleClick: null,
};

export default React.memo(Horizen);
