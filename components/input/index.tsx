import * as React from "react";
import cx from "classnames";

import { RiArrowRightLine } from "react-icons/ri";

export type StatusType = "SUCCESS" | "ERROR";

export interface InputProps {
  className?: string;
  formId: string;
  searchInputId: string;
  handleOnSubmit: React.FormEventHandler<HTMLFormElement>;
  apiStatus?: StatusType;
}

const Input: React.FunctionComponent<InputProps> = ({
  handleOnSubmit,
  formId,
  searchInputId,
  className,
}) => {
  const wrapHandleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (typeof handleOnSubmit === "function") {
      handleOnSubmit(e);
    }
  };

  return (
    <form
      className={cx("group", "w-full", className)}
      name={formId}
      onSubmit={wrapHandleOnSubmit}
    >
      <div
        className={cx(
          "flex",
          "items-center",
          "border-[1px]",
          "border-blue-400",
          "border-solid",
          "rounded-xl",
          "pl-3",
          "pr-1",
          "py-1",
          "hover",
          "group-hover:border-blue-200",
          "focus-within:border-blue-200"
        )}
      >
        <label className={cx("hidden")} htmlFor={searchInputId}>
          Find a movie
        </label>
        <input
          type="text"
          className={cx(
            "outline-0",
            "flex-grow",
            "flex-shrink",
            "w-full",
            "placeholder:text-blue-400",
            "bg-transparent",
            "text-white"
          )}
          name={searchInputId}
          id={searchInputId}
          placeholder="Type a keyword and press enter."
        />
        <button
          className={cx(
            "inline-flex",
            "items-center",
            "bg-blue-500",
            "text-white",
            "font-semibold",
            "text-base",
            "p-2",
            "md:p-1",
            "rounded-full",
            "md:rounded-xl",
            "flex-shrink-0",
            "space-x-0",
            "md:space-x-2"
          )}
          tabIndex={-1}
          type="submit"
          data-testid="submitBtn"
        >
          <span className={cx("hidden", "md:inline-block", "ml-2")}>Find</span>
          <RiArrowRightLine />
        </button>
      </div>
    </form>
  );
};

export default Input;
