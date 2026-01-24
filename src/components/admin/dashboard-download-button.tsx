"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { downloadLeadsAndInquiries } from "@/app/actions/download-leads";

export function DashboardDownloadButton() {
  const handleDownload = async () => {
    toast.promise(
      async () => {
        const csvData = await downloadLeadsAndInquiries();
        // Create a Blob from the CSV string
        const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
        const url = window.URL.createObjectURL(blob);

        // Create a temporary link to trigger download
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `investor-labs-leads-${new Date().toISOString().split("T")[0]}.csv`,
        );
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      },
      {
        loading: "Generating report...",
        success: "Report downloaded successfully!",
        error: "Failed to generate report",
      },
    );
  };

  return (
    <Button
      onClick={handleDownload}
      className="bg-brand-primary text-white hover:bg-brand-primary/90"
    >
      <Download className="mr-2 h-4 w-4" />
      Download CSV
    </Button>
  );
}
