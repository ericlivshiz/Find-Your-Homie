import { useState } from "react";
import { MapPin } from "lucide-react"; // Assuming lucide-react is used for icons

export default function LocationFilter({
  onFilterChange,
}: {
  onFilterChange: (goleta: boolean, islaVista: boolean) => void;
}) {
  const [isGoleta, setIsGoleta] = useState(false);
  const [isIslaVista, setIsIslaVista] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleGoletaChange = () => {
    setIsGoleta(!isGoleta);
    onFilterChange(!isGoleta, isIslaVista);
  };

  const handleIslaVistaChange = () => {
    setIsIslaVista(!isIslaVista);
    onFilterChange(isGoleta, !isIslaVista);
  };

  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-md shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
        <MapPin className="text-gray-500 mr-2" />
        <h3 className="text-lg font-medium text-black mb-2">Location</h3>
      </div>
      {isExpanded && (
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-black">Goleta</span>
            <input
              type="checkbox"
              checked={isGoleta}
              onChange={handleGoletaChange}
              className="toggle-checkbox"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-black">Isla Vista</span>
            <input
              type="checkbox"
              checked={isIslaVista}
              onChange={handleIslaVistaChange}
              className="toggle-checkbox"
            />
          </div>
        </div>
      )}
    </div>
  );
} 