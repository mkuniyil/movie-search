import * as React from "react";
import cx from "classnames";
import Link from "next/link";

import { Movie } from "../../utils/search";
import Image from "../image";
import YearAndType from "../meta/yearAndType";

const Thumbnail: React.FunctionComponent<Movie> = ({
  Title,
  Poster,
  imdbID,
  Type,
  Year,
}) => {
  return (
    <article>
      <Link href={`/movie/${imdbID}`}>
        <a
          className={cx("flex", "flex-col", "gap-2", "block", "h-full", "pb-2")}
        >
          <Image Poster={Poster} Title={Title} />
          <header className={cx("flex", "flex-col")}>
            <h3 className={cx("font-bold", "text-base")}>{Title}</h3>
            <YearAndType Type={Type} Year={Year} />
          </header>
        </a>
      </Link>
    </article>
  );
};

export default Thumbnail;
