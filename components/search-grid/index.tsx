import * as React from "react";
import cx from "classnames";

const SearchGrid: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      className={cx(
        "grid",
        "grid-cols-2",
        "md:grid-cols-4",
        "lg:grid-cols-6",
        "gap-4"
      )}
    >
      {children}
    </div>
  );
};

export default SearchGrid;
