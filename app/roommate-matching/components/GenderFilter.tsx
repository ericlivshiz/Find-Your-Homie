import { useState } from "react";
import { User } from "lucide-react"; // Assuming lucide-react is used for icons

export default function GenderFilter({
  onFilterChange,
}: {
  onFilterChange: (gender: string) => void;
}) {
  const [selectedGender, setSelectedGender] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedGender(value);
    onFilterChange(value);
  };

  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-md shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
        <User className="text-gray-500 mr-2" />
        <h3 className="text-lg font-medium text-black mb-2">Gender</h3>
      </div>
      {isExpanded && (
        <select
          value={selectedGender}
          onChange={handleGenderChange}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      )}
    </div>
  );
} 