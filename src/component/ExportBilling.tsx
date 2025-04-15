import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { shadowGridLogo } from "../utils/ShadowGridLogo";



export const downloadBillingAsPDF = (
  data: any[],
  duration: "daily" | "weekly" | "monthly"
) => {
  const doc = new jsPDF();
  const title = `ShadowGrid – ${duration.toUpperCase()} Billing Report`;

  // Add logo
  doc.addImage(shadowGridLogo, "PNG", 14, 10, 14, 14);

  // Add title text
  doc.setFontSize(16);
  doc.setTextColor("#FDBA21");
  doc.text(title, 32, 20);

  // Billing table
  autoTable(doc, {
    startY: 30,
    head: [["Home Name", "Daily Consumption (kWh)", "Bill (₦)"]],
    body: data.map((row) => [
      row.name,
      row.dailyConsumption.toFixed(2),
      `₦${row.bill.toLocaleString()}`,
    ]),
    headStyles: {
      fillColor: [30, 64, 175],
    },
    styles: {
      fontSize: 11,
    },
  });

  doc.save(`shadowgrid-billing-${duration}.pdf`);
};
