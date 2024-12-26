import { useState } from "react";
import { Calendar } from "lucide-react"; // Assuming lucide-react is used for icons

export default function DateFilter({
  onFilterChange,
}: {
  onFilterChange: (moveIn: string, moveOut: string) => void;
}) {
  const [moveInDate, setMoveInDate] = useState("");
  const [moveOutDate, setMoveOutDate] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMoveInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMoveInDate(value);
    onFilterChange(value, moveOutDate);
  };

  const handleMoveOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMoveOutDate(value);
    onFilterChange(moveInDate, value);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-md shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
        <Calendar className="text-gray-500 mr-2" />
        <h3 className="text-lg font-medium text-black mb-2">Date Range</h3>
      </div>
      {isExpanded && (
        <>
          <label className="text-sm font-medium text-black mb-1">
            Move-in Date
          </label>
          <input
            type="date"
            value={moveInDate}
            onChange={handleMoveInChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="text-sm font-medium text-black mt-4 mb-1">
            Move-out Date
          </label>
          <input
            type="date"
            value={moveOutDate}
            onChange={handleMoveOutChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </>
      )}
    </div>
  );
}
