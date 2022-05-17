import * as React from "react";
import cx from "classnames";

import Container from "../container";

const Footer: React.FunctionComponent = () => {
  return (
    <footer
      className={cx(
        "bg-neutral-100",
        "border-t-[1px]",
        "border-neutral-300",
        "py-4",
        "mt-4"
      )}
    >
      <Container>This is my footer</Container>
    </footer>
  );
};

export default Footer;
