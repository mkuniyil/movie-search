import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";

import { RiMovie2Line, RiArrowLeftLine } from "react-icons/ri";

import Container from "../container";
import Input from "../input";

import { FORM_ID, SEARCH_INPUT_ID } from "../../utils/config";
import useSearch from "../../hooks/useSearch";

const Header: React.FunctionComponent = () => {
  const { handleOnSubmit, searchStr } = useSearch();
  const { pathname } = useRouter();

  return (
    <header
      className={cx(
        "sticky",
        "top-0",
        "mb-4",
        "bg-blue-600",
        "border-b-[1px]",
        "border-neutral-200"
      )}
    >
      <Container className={cx("py-2")} wrapperEl="nav">
        <ul className={cx("flex", "space-x-2", "w-full")}>
          {pathname !== "/" && (
            <li data-testid="navBackBtn">
              <Link href={searchStr ? `/?search=${searchStr}` : "/"}>
                <a
                  className={cx(
                    "inline-flex",
                    "justify-center",
                    "items-center",
                    "text-2xl",
                    "text-white",
                    "rounded-xl",
                    "p-2",
                    "border-[1px]",
                    "border-blue-400"
                  )}
                >
                  <span className={cx("hidden")}>Go back</span>
                  <RiArrowLeftLine aria-hidden="true" />
                </a>
              </Link>
            </li>
          )}
          <li data-testid="navHomeBtn">
            <Link href="/">
              <a
                className={cx(
                  "inline-flex",
                  "justify-center",
                  "items-center",
                  "text-2xl",
                  "font-bold",
                  "rounded-xl",
                  "p-2",
                  "text-white",
                  "bg-gradient-to-b",
                  "from-blue-900",
                  "to-blue-800",
                  "shadow-xl",
                  "border-[1px]",
                  "border-blue-400"
                )}
              >
                <RiMovie2Line />
              </a>
            </Link>
          </li>
          <li data-testid="searchInput" className={cx("flex-grow")}>
            <Input
              searchInputId={SEARCH_INPUT_ID}
              formId={FORM_ID}
              handleOnSubmit={handleOnSubmit}
            />
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
