import React from "react";
import { render, screen } from "@testing-library/react";
import * as utils from "./utils";
import Image from "./index";

describe("Image", () => {
  test("should not render image if url is not valid", () => {
    jest.spyOn(utils, "checkForValueUrl").mockReturnValue(false);

    render(<Image Poster="dummyUrl" Title="title" />);

    expect(screen.queryByTestId("imgElem")).not.toBeInTheDocument();
    expect(screen.queryByTestId("imgAltElem")).toBeInTheDocument();
  });

  test("should not render image if url is valid", () => {
    jest.spyOn(utils, "checkForValueUrl").mockReturnValue(true);

    render(<Image Poster="https://myImages.com/image1.jpg" Title="title" />);

    expect(screen.queryByTestId("imgElem")).toBeInTheDocument();
    expect(screen.queryByTestId("imgAltElem")).not.toBeInTheDocument();
  });
});
