export const exportPdf = (data) => {
  const content = JSON.stringify(
    data,
    null,
    2
  );

  const blob = new Blob(
    [content],
    {
      type: "text/plain",
    }
  );

  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download =
    "careercopilot-analysis.txt";

  link.click();

  window.URL.revokeObjectURL(url);
};