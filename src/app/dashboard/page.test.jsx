import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";
import {describe} from "node:test";

jest.mock("./actions/handle-download");
import {handleDownload} from "../actions/handle-download";

describe("File download test suite", () => {
  beforeEach(() => {
    handleDownload.mockClear();
  });

  test("download button exists", () => {
    const {getByText} = render(<Home />);
    const button = getByText("Download Report");
    expect(button).toBeInTheDocument();
  });

  test("success message displays after successful download", async () => {
    const {getByText} = render(<Home />);

    const button = getByText("Download Report");

    handleDownload.mockImplementation(() => {
      const mockBlob = new Blob(["mock data"], {type: "text/csv"});
      return Promise.resolve({
        ok: true,
        blob: () => Promise.resolve(mockBlob),
      });
    });

    fireEvent.click(button);

    await waitFor(() => {
      const successMessage = screen.getByText("Download successful!");
      expect(successMessage).toBeInTheDocument();
    });
  });

  test("error message displays after download fails", async () => {
    const {getByText} = render(<Home />);

    const button = getByText("Download Report");

    handleDownload.mockImplementation(() => {
      return Promise.reject(new Error());
    });

    fireEvent.click(button);

    await waitFor(() => {
      const errorMessage = screen.getByText("Error: Something went wrong. Please try again");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
