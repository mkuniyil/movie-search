import * as React from "react";
import { InferGetServerSidePropsType } from "next";
import cx from "classnames";
import { RiEmotionSadLine } from "react-icons/ri";

import CustomImage from "../../components/image";
import YearAndType from "../../components/meta/yearAndType";
import GenreAndRated from "../../components/meta/genreAndRated";
import Rating from "../../components/meta/rating";
import fetchData, { Movie } from "../../utils/movie";

const MovieDetails: React.FunctionComponent<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  if (props.Response === "False") {
    return (
      <div
        className={cx(
          "flex",
          "flex-col",
          "p-10",
          "align-middle",
          "items-center",
          "space-y-4"
        )}
      >
        <RiEmotionSadLine className={cx("text-7xl", "text-red-600")} />
        <h4>{props.Error}</h4>
      </div>
    );
  }

  return (
    <article className={cx("grid", "grid-cols-3", "gap-6")}>
      <div className={cx("col-span-full", "md:col-span-1")}>
        <CustomImage Poster={props.Poster} Title={props.Title} />
      </div>
      <div
        className={cx(
          "col-span-full",
          "md:col-span-2",
          "flex",
          "flex-col",
          "gap-3"
        )}
      >
        <div
          className={cx(
            "flex",
            "justify-between",
            "flex-col",
            "md:flex-row",
            "gap-3"
          )}
        >
          <h1
            className={cx(
              "font-bold",
              "text-xl",
              "md:text-2xl",
              "text-neutral-800"
            )}
          >
            {props.Title}
          </h1>
          <Rating Ratings={props.Ratings} />
        </div>
        <div className={cx("flex", "flex-col", "md:flex-row", "gap-3")}>
          <GenreAndRated
            Rated={props.Rated}
            Runtime={props.Runtime}
            Genre={props.Genre}
          />
          <YearAndType Type={props.Type} Year={props.Year} />
        </div>
        <p>{props.Plot}</p>
      </div>
    </article>
  );
};

export default MovieDetails;

export const getServerSideProps = async ({ query }) => {
  const props = await fetchData({
    query: query.id as string,
  })
    .then((res) => res)
    .catch(() => ({} as Movie));

  return {
    props,
  };
};
