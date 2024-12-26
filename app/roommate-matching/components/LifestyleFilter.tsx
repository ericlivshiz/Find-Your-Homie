import { useState } from "react";
import { Heart } from "lucide-react"; // Assuming lucide-react is used for icons

export default function LifestyleFilter({
  onFilterChange,
}: {
  onFilterChange: (smoking: boolean, drinking: boolean, pets: boolean) => void;
}) {
  const [isSmoking, setIsSmoking] = useState(false);
  const [isDrinking, setIsDrinking] = useState(false);
  const [hasPets, setHasPets] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSmokingChange = () => {
    setIsSmoking(!isSmoking);
    onFilterChange(!isSmoking, isDrinking, hasPets);
  };

  const handleDrinkingChange = () => {
    setIsDrinking(!isDrinking);
    onFilterChange(isSmoking, !isDrinking, hasPets);
  };

  const handlePetsChange = () => {
    setHasPets(!hasPets);
    onFilterChange(isSmoking, isDrinking, !hasPets);
  };

  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-md shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
        <Heart className="text-gray-500 mr-2" />
        <h3 className="text-lg font-medium text-black mb-2">Lifestyle</h3>
      </div>
      {isExpanded && (
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-black">Smoking</span>
            <input
              type="checkbox"
              checked={isSmoking}
              onChange={handleSmokingChange}
              className="toggle-checkbox"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-black">Drinking</span>
            <input
              type="checkbox"
              checked={isDrinking}
              onChange={handleDrinkingChange}
              className="toggle-checkbox"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-black">Pets</span>
            <input
              type="checkbox"
              checked={hasPets}
              onChange={handlePetsChange}
              className="toggle-checkbox"
            />
          </div>
        </div>
      )}
    </div>
  );
} 