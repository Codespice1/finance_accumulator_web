"use client";

import {useState} from "react";
import {handleDownload} from "../actions/handle-download";

export default function Home() {
  const [message, setMessage] = useState("");

  const downloadReport = async () => {
    try {
      await handleDownload();
      setMessage("Download successful!");
    } catch (error: any) {
      console.error(error);
      setMessage("Error: Something went wrong. Please try again");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2 data-cy="authenticated">Stripe financial report:</h2>
      <button
        type="button"
        onClick={downloadReport}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Download Report
      </button>
      <div className="text-white">{message && <p>{message}</p>}</div>
    </main>
  );
}
