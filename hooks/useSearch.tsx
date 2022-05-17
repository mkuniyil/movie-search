import * as React from "react";
import { useRouter } from "next/router";

import { InputProps } from "../components/input";
import { FORM_ID, SEARCH_INPUT_ID } from "../utils/config";

type UseSearchOutput = Pick<InputProps, "handleOnSubmit">;

type UseSearch = () => UseSearchOutput;

const useSearch: UseSearch = () => {
  const router = useRouter();

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async () => {
    const searchQuery = (
      document.forms[FORM_ID].elements[SEARCH_INPUT_ID] as HTMLInputElement
    ).value;

    router.push({
      pathname: "/",
      query: {
        search: searchQuery.trim(),
      },
    });
  };

  return {
    handleOnSubmit,
  };
};

export default useSearch;
