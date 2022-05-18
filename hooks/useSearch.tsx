import * as React from "react";
import { useRouter } from "next/router";

import { InputProps } from "../components/input";
import { FORM_ID, SEARCH_INPUT_ID } from "../utils/config";
import { useState } from "react";
import { Merge } from "type-fest";

type UseSearchOutput = Pick<InputProps, "handleOnSubmit">;

type UseSearch = () => Merge<UseSearchOutput | { searchStr: string }, any>;

const useSearch: UseSearch = () => {
  const [searchStr, setSearchStr] = useState(undefined);
  const router = useRouter();

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async () => {
    const searchQuery = (
      document.forms[FORM_ID].elements[SEARCH_INPUT_ID] as HTMLInputElement
    ).value;

    setSearchStr(searchQuery);
    router.push({
      pathname: "/",
      query: {
        search: searchQuery,
      },
    });
  };

  return {
    searchStr,
    handleOnSubmit,
  };
};

export default useSearch;
