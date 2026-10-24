import { exportPdf } from "../../utils/exportPdf";

export default function ExportReportButton({
  data,
}) {
  if (!data) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => exportPdf(data)}
    >
      Export Report
    </button>
  );
}