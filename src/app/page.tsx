"use client";

export default function Home() {
  const handleDownload = () => {
    fetch("/api/stripe/report")
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error("Network response was not ok.");
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "stripe_report.csv";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Download error:", error));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2>Stripe financial report:</h2>
      <button
        type="button"
        onClick={handleDownload}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Download Report
      </button>
      <div></div>
    </main>
  );
}
