import * as React from "react";
import cx from "classnames";

import { FaImdb } from "react-icons/fa";
import { SiRottentomatoes } from "react-icons/si";

import { Movie } from "../../utils/movie";

type GenreAndRatedProps = Pick<Movie, "Ratings"> & {
  className?: string;
};

const GenreAndRated: React.FunctionComponent<GenreAndRatedProps> = ({
  Ratings,
  className,
}) => {
  const imdb = React.useMemo(() => {
    return Ratings?.find(({ Source }) => Source === "Internet Movie Database");
  }, [Ratings]);

  const rotten = React.useMemo(() => {
    return Ratings?.find(({ Source }) => Source === "Rotten Tomatoes");
  }, [Ratings]);

  return (
    <div className={cx("flex", "gap-4", className)}>
      {imdb && (
        <div
          className={cx(
            "text-neutral-700",
            "text-2xl",
            "flex",
            "gap-1",
            "items-center",
            "text-yellow-600"
          )}
        >
          <FaImdb />
          <span className={cx("text-base")}>{imdb.Value}</span>
        </div>
      )}
      {rotten && (
        <div
          className={cx(
            "text-neutral-700",
            "text-2xl",
            "flex",
            "gap-1",
            "items-center",
            "text-red-600"
          )}
        >
          <SiRottentomatoes />
          <span className={cx("text-base")}>{rotten.Value}</span>
        </div>
      )}
    </div>
  );
};

export default GenreAndRated;
