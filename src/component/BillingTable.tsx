const BillingTable = ({ data }: { data: any[] }) => {
  return (
    <div className="overflow-x-auto md:overflow-y-hidden overflow-y-auto max-h-[420px] rounded-lg border border-gray-800 mt-4">
      <table className="w-full min-w-[600px] text-sm">
        <thead className="text-yellow-300 text-left bg-gray-900 sticky top-0 z-10">
          <tr>
            <th className="py-3 px-4">Home Name</th>
            <th className="py-3 px-4">Daily Consumption (kWh)</th>
            <th className="py-3 px-4">Bill (₦)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((home, i) => (
            <tr key={i} className="border-b border-gray-800 hover:bg-gray-800">
              <td className="py-2 px-4">{home.name}</td>
              <td className="py-2 px-4">{home.dailyConsumption.toFixed(2)}</td>
              <td className="py-2 px-4 font-semibold text-yellow-300">
                ₦{home.bill.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingTable;
