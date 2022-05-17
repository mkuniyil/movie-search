import * as React from "react";
import cx from "classnames";
import upperFirst from "lodash.upperfirst";

import { Movie } from "../../utils/search";

type YearAndTypeProps = Pick<Movie, "Type" | "Year"> & {
  className?: string;
};

const YearAndType: React.FunctionComponent<YearAndTypeProps> = ({
  Type,
  Year,
  className,
}) => {
  return (
    <div className={cx("flex", "gap-3", className)}>
      <span className={cx("text-neutral-600", "text-sm")}>
        {upperFirst(Type)}
      </span>
      <span
        className={cx(
          "flex",
          "items-center",
          "justify-center",
          "text-white",
          "uppercase",
          "text-xs",
          "bg-amber-600",
          "px-1",
          "rounded-md"
        )}
      >
        {Year}
      </span>
    </div>
  );
};

export default YearAndType;
