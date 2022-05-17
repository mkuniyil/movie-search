import * as React from "react";
import cx from "classnames";

import { Movie } from "../../utils/movie";

type GenreAndRatedProps = Pick<Movie, "Rated" | "Runtime" | "Genre"> & {
  className?: string;
};

const GenreAndRated: React.FunctionComponent<GenreAndRatedProps> = ({
  Rated,
  Runtime,
  Genre,
  className,
}) => {
  return (
    <div className={cx("flex", "gap-3", className)}>
      <span className={cx("text-neutral-700", "text-sm")}>{Rated}</span>
      <span className={cx("text-neutral-700", "text-sm")}>{Runtime}</span>
      <span className={cx("text-neutral-700", "text-sm")}>{Genre}</span>
    </div>
  );
};

export default GenreAndRated;
