// src/components/Home/Home.test.js
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";
import {describe} from "node:test";

describe("Tests api call", () => {
  test("Verify if csv report downloads on button click", async () => {
    const {getByText} = render(<Home />);

    // Find the button to download report
    const button = getByText("Download Report");
    expect(button).toBeInTheDocument();

    // click the button
    fireEvent.click(button);

    await waitFor(() => {
      const downloadLink = document.querySelector("a");
      expect(downloadLink).toBeInTheDocument();
      expect(downloadLink.getAttribute("href")).toBeDefined();
      expect(downloadLink.getAttribute("download")).toBe("stripe_report.csv");
    });
  });
});
