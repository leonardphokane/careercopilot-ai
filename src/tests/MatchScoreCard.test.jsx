import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  test,
} from "vitest";

import MatchScoreCard from "../components/MatchScoreCard/MatchScoreCard";

describe("MatchScoreCard", () => {
  test("renders score", () => {
    render(
      <MatchScoreCard score={84} />
    );

    expect(
      screen.getByText("84%")
    ).toBeInTheDocument();
  });
});