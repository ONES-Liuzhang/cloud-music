import React from "react";
import { SingerListProps } from "../type";
import { List, ListItem } from "./style";
import LazyLoad from "react-lazyload";
import { useHistory } from "react-router";

function SingerList(props: SingerListProps) {
  const { singerList } = props;
  const history = useHistory()

  const enterDetail = (id: number) => {
    history.push(`/singers/${id}`)
  }

  return (
    <List>
      {singerList.map((item) => (
        <ListItem key={item.id} onClick={() => enterDetail(item.id)}>
          <div className={"img_wrapper"}>
            <LazyLoad
              placeholder={
                <img
                  src={require("./singer.png").default}
                  height="100%"
                  width="100%"
                  alt="misic"
                />
              }
            >
              <img
                height="100%"
                width="100%"
                src={item.picUrl + "?param=300x300"}
                alt="singer"
              />
            </LazyLoad>
          </div>
          <span>{item.name}</span>
        </ListItem>
      ))}
    </List>
  );
}

export default React.memo(SingerList);
