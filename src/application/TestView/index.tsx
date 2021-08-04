import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

function TestView(props: any) {
  const [count, setCount] = useState(0);
  const pRef = useRef<HTMLParagraphElement | null>(null);
  const debounce = useDebounce();

  const onInputChange = (e: any) => {
    const { target } = e;
    debounce(() => {
      setCount(target.value);
    });
  };

  /** useEffect 渲染之后的副作用 */
  useEffect(() => {
    setCount(3);
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <h1>这是一个测试页面！</h1>
      <p>{count}</p>
      <p ref={pRef}>请输入：</p>
      <input onInput={onInputChange} type="number" />
    </div>
  );
}

export default React.memo(TestView);
