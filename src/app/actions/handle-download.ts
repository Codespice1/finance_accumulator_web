export const handleDownload = async () => {
    try {
      const response = await fetch("/api/stripe/report");
      if (!response.ok) {
        throw new Error("Server Error: Network response was not ok.");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "stripe_report.csv";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      throw new Error(`Download error: ${error}`);
    }
  };
