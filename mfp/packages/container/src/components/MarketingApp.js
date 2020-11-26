import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
// Remember: the mount function takes a HTML element, and then
// displays contant inside it. So cannot be used directly inside a react component.

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    return mount(ref.current);
  });

  return <div ref={ref} />;
};
