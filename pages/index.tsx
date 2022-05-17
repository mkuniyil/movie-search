import * as React from "react";
import { InferGetServerSidePropsType } from "next";
import cx from "classnames";

import Thumbnail from "../components/thumbnail";
import SearchGrid from "../components/search-grid";
import SearchError from "../components/search-error";
import fetchData, { Search } from "../utils/search";

import useQueryParamFetcher from "../hooks/useQueryParamFetcher";

const Home: React.FunctionComponent<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { apiStatus, data } = useQueryParamFetcher(props);

  return (
    <>
      {typeof apiStatus === "undefined" && (
        <SearchGrid>
          <div className={cx("col-span-full")}>
            <h1 className={cx("text-2xl", "font-bold")}>Hello, 👋</h1>
            <h2 className={cx("text-base")}>Know your favorite movies.</h2>
          </div>
        </SearchGrid>
      )}
      {apiStatus === "SUCCESS" &&
        data.Response === "True" &&
        data?.Search?.length > 0 && (
          <SearchGrid>
            {data.Search.map((data) => (
              <Thumbnail {...data} key={data.imdbID} />
            ))}
          </SearchGrid>
        )}
      {((apiStatus === "SUCCESS" && data.Response === "False") ||
        apiStatus === "ERROR") && (
        <SearchGrid>
          <SearchError />
        </SearchGrid>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps = async ({ query }) => {
  let props = {} as Search;

  if (typeof query.search === "string" && query.search.length > 0) {
    props = await fetchData({
      query: query.search as string,
    })
      .then((res) => res)
      .catch(() => ({} as Search));
  }

  return {
    props,
  };
};
