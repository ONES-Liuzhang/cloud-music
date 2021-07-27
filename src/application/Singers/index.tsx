import React, { useState } from "react";
import Horizen from "../../baseUI/horizen-item";
import { NavContainer } from "./style";
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

  return (
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
  );
}

export default React.memo(Singers);
