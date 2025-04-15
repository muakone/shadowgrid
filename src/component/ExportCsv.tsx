// src/component/ExportPDFButton.tsx
import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download } from "lucide-react";
import { shadowGridLogo } from "../utils/ShadowGridLogo";

interface ExportPDFProps {
  data: any[];
  fileName?: string;
}

const ExportPDFButton: React.FC<ExportPDFProps> = ({ data, fileName = "recommendations.pdf" }) => {
    const handleExport = () => {
        if (!data || data.length === 0) return;
      
        const doc = new jsPDF();
      
        // Add logo
        const logoWidth = 30;
        const logoHeight = 30;
        doc.addImage(shadowGridLogo, "PNG", 14, 10, logoWidth, logoHeight);
      
        // Add title below the logo
        doc.setFontSize(14);
        doc.text("Solar Sharing Recommendations", 14, 50);
      
        autoTable(doc, {
          startY: 55,
          head: [["From", "To", "Allocated (kWh)", "Demand (kWh)", "Satisfied"]],
          body: data.map(row => [
            row.from,
            row.to,
            row.allocated,
            row.demand,
            row.satisfied ? "Yes" : "No"
          ]),
          styles: { fontSize: 10 },
          headStyles: { fillColor: [255, 204, 0] },
        });
      
        doc.save(fileName);
      };
      
  return (
    <button
      onClick={handleExport}
      className="mb-6 flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md text-sm transition shadow-md cursor-pointer hover:text-white"
    >
      <Download className="w-4 h-4" /> Export as PDF
    </button>
  );
};

export default ExportPDFButton;
