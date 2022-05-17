import React from "react";
import { render, screen } from "@testing-library/react";
import nextRouter from "next/router";
import Header from "./index";

describe("Header", () => {
  test("should not render back button on Home page", () => {
    // @ts-ignore
    jest.spyOn(nextRouter, "useRouter").mockReturnValue({
      route: "/",
      pathname: "/",
      query: "",
    });

    render(<Header />);
    expect(screen.queryByTestId("navBackBtn")).not.toBeInTheDocument();
    expect(screen.queryByTestId("navHomeBtn")).toBeInTheDocument();
    expect(screen.queryByTestId("searchInput")).toBeInTheDocument();
  });

  test("should render all the buttons", async () => {
    // @ts-ignore
    jest.spyOn(nextRouter, "useRouter").mockReturnValue({
      route: "/",
      pathname: "/movie/testId",
      query: "",
    });

    render(<Header />);
    expect(screen.queryByTestId("navBackBtn")).toBeInTheDocument();
    expect(screen.queryByTestId("navHomeBtn")).toBeInTheDocument();
    expect(screen.queryByTestId("searchInput")).toBeInTheDocument();
  });
});
