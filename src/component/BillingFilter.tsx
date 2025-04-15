const BillingFilter = ({
    filter,
    setFilter,
  }: {
    filter: "daily" | "weekly" | "monthly";
    setFilter: (f: "daily" | "weekly" | "monthly") => void;
  }) => {
    return (
      <div className="flex flex-wrap gap-3 mb-6">
  {["daily", "weekly", "monthly"].map((item) => (
    <button
      key={item}
      onClick={() => setFilter(item as any)}
      className={`px-4 py-2 rounded-md text-sm font-medium ${
        filter === item
          ? "bg-yellow-400 text-black"
          : "bg-gray-800 text-gray-400 hover:bg-gray-700"
      }`}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </button>
  ))}
</div>

    );
  };
  
  export default BillingFilter;
  