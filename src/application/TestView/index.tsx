import React, { useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

function TestView(props: any) {
  const [count, setCount] = useState(0);

  const debounce = useDebounce();

  const onInputChange = (e: any) => {
    const { target } = e;
    debounce(() => {
      setCount(target.value);
    });
  };

  const timerRef = useRef(0);
  useEffect(() => {
    console.log(timerRef.current);
    setTimeout(() => {
      timerRef.current = 20;
    }, 1000);
  }, [timerRef]);

  return (
    <div>
      <h1>这是一个测试页面！</h1>
      <p>{count}</p>
      <p>请输入：</p>
      <input onInput={onInputChange} type="number" />
    </div>
  );
}

export default React.memo(TestView);
