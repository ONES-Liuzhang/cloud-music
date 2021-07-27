import React, { useState } from "react";
import Horizen from "../../baseUI/horizen-item";
import SingerList from "../../components/singer-list";
import Scroll from "../../baseUI/scroll";
import { NavContainer, SingerContainer, ScrollContainer } from "./style";
import { categoryTypes, alphaTypes } from "../../api/config";

function Singers() {
  const [category, setCategory] = useState<string>("");
  const [alpha, setAlpha] = useState<string>("");

  const handleCategoryUpdate = (val: string) => {
    setCategory(val);
  };

  const handleAlphaUpdate = (val: string) => {
    setAlpha(val);
  };

  // mock
  const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
    picUrl:
      "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
    name: "隔壁老樊",
    accountId: 277313426 + item,
  }));

  return (
    <SingerContainer>
      <NavContainer>
        <Horizen
          title="分类 (默认热门):"
          list={categoryTypes}
          oldVal={category}
          handleClick={(val) => handleCategoryUpdate(val)}
        ></Horizen>
        <Horizen
          title="首字母:"
          list={alphaTypes}
          oldVal={alpha}
          handleClick={(val) => handleAlphaUpdate(val)}
        ></Horizen>
      </NavContainer>
      <ScrollContainer>
        <Scroll>
          <SingerList singerList={singerList}></SingerList>
        </Scroll>
      </ScrollContainer>
    </SingerContainer>
  );
}

export default React.memo(Singers);
