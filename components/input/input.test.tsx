import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Input from "./index";

describe("Input", () => {
  test("should return callback", async () => {
    const handleOnSubmit = jest.fn();

    const { getByTestId } = render(
      <Input
        formId="formId"
        searchInputId="searchInputId"
        className=""
        handleOnSubmit={handleOnSubmit}
      />
    );

    fireEvent.submit(getByTestId("submitBtn"), {
      target: { value: "Man" },
    });
    expect(handleOnSubmit).toHaveBeenCalledTimes(1);
  });
});
