import * as React from "react";
import { useRouter } from "next/router";

import { InputProps } from "../components/input";
import { FORM_ID, SEARCH_INPUT_ID } from "../utils/config";
import { Search } from "../utils/search";

type UseQueryParamFetcherOutput = Pick<InputProps, "apiStatus"> & {
  data: Search;
};

type UseQueryParamFetcher = (props: Search) => UseQueryParamFetcherOutput;

const useQueryParamFetcher: UseQueryParamFetcher = (props = {} as Search) => {
  const router = useRouter();
  const [data, setData] = React.useState<Search>(props);
  const [apiStatus, setApiStatus] = React.useState<
    UseQueryParamFetcherOutput["apiStatus"] | undefined
  >(
    props?.Response === "True"
      ? "SUCCESS"
      : props?.Response === "False"
      ? "ERROR"
      : undefined
  );

  const updateInput = (value?: string) => {
    document.forms[FORM_ID].elements[SEARCH_INPUT_ID].value = value;
  };

  React.useEffect(() => {
    if (typeof props?.Response !== "string") {
      updateInput("");
      setApiStatus(undefined);
      setData({} as Search);
      return;
    }

    const searchQuery = router.query.search as string;

    if (typeof searchQuery === "string" && searchQuery.length > 0) {
      updateInput(searchQuery);
      setData(props);
    } else {
      updateInput("");
      setData({} as Search);
    }
    setApiStatus("SUCCESS");
  }, [router.query, props]);

  return {
    apiStatus,
    data,
  };
};

export default useQueryParamFetcher;
