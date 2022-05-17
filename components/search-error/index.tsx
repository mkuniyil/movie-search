import * as React from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import { RiEmotionSadLine } from "react-icons/ri";

const SearchError: React.FunctionComponent = () => {
  const { query } = useRouter();
  return (
    <div className={cx("col-span-full", "grid", "place-content-center")}>
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
        <h4>
          We are unable to find any results for <b>{query.search}</b>.
        </h4>
      </div>
    </div>
  );
};

export default SearchError;
