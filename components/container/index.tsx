import * as React from "react";
import cx from "classnames";

const Container: React.FunctionComponent<{
  children: React.ReactNode;
  className?: string;
  wrapperEl?: "div" | "nav" | "main";
}> = ({ children, className, wrapperEl: WrapperEl = "div" }) => {
  return (
    <WrapperEl className={cx("container", "mx-auto", "px-3", className)}>
      {children}
    </WrapperEl>
  );
};

export default Container;
