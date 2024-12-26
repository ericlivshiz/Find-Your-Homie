import { useState } from "react";
import { Moon } from "lucide-react"; // Assuming lucide-react is used for icons

export default function SleepHabitsFilter({
  onFilterChange,
}: {
  onFilterChange: (habit: string) => void;
}) {
  const [selectedHabit, setSelectedHabit] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleHabitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedHabit(value);
    onFilterChange(value);
  };

  return (
    <div className="flex flex-col bg-gray-50 p-4 rounded-md shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center cursor-pointer" onClick={toggleExpand}>
        <Moon className="text-gray-500 mr-2" />
        <h3 className="text-lg font-medium text-black mb-2">Sleep Habits</h3>
      </div>
      {isExpanded && (
        <select
          value={selectedHabit}
          onChange={handleHabitChange}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Habit</option>
          <option value="Early Bird">Early Bird</option>
          <option value="Night Owl">Night Owl</option>
          <option value="Flexible">Flexible</option>
        </select>
      )}
    </div>
  );
} 