import { useState } from "react";
import { Filter } from "lucide-react";

export default function RentFilter({
  onFilterChange,
}: {
  onFilterChange: (min: number, max: number) => void;
}) {
  const [minRent, setMinRent] = useState(0);
  const [maxRent, setMaxRent] = useState(5000);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMinRent(value);
    onFilterChange(value, maxRent);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setMaxRent(value);
    onFilterChange(minRent, value);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-md shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
        <Filter className="text-gray-500 mr-2" />
        <h3 className="text-lg font-medium text-black mb-2">Rent Range</h3>
      </div>
      {isExpanded && (
        <>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-black">Min.</span>
            <input
              type="range"
              min="0"
              max="5000"
              value={minRent}
              onChange={handleMinChange}
              className="slider accent-blue-500"
            />
            <span className="text-sm text-black">${minRent}</span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-sm text-black">Max.</span>
            <input
              type="range"
              min="0"
              max="5000"
              value={maxRent}
              onChange={handleMaxChange}
              className="slider accent-blue-500"
            />
            <span className="text-sm text-black">${maxRent}</span>
          </div>
        </>
      )}
    </div>
  );
}
