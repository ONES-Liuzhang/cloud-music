import React from "react";
import { SingerListProps } from "../type";
import { List, ListItem } from "./style";

function SingerList(props: SingerListProps) {
  const { singerList } = props;

  return (
    <List>
      {singerList.map((item) => (
        <ListItem key={item.accountId}>
          <div className={"img_wrapper"}>
            <img
              height="100%"
              width="100%"
              src={item.picUrl + "?param=300x300"}
              alt="singer"
            />
          </div>
          <span>{item.name}</span>
        </ListItem>
      ))}
    </List>
  );
}

export default React.memo(SingerList);
