import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Search, Sparkles, User, Sun, Moon, Mail } from "lucide-react"; // Make sure to adjust the import paths for your icons

export default function SearchBar() {
  // State management
  const [gender, setGender] = useState("any");
  const [sleepingHabits, setSleepingHabits] = useState("any");
  const [lifestyle, setLifestyle] = useState({
    drinking: false,
    pets: false,
    smoking: false,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle form submission
  const handleSearchRoommates = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log({ gender, sleepingHabits, lifestyle });
  };

  return (
    <form onSubmit={handleSearchRoommates} className="relative">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal bg-slate-800 bg-opacity-80 text-gray-300 rounded-lg border border-gray-300"
          >
            <Search className="mr-2 h-4 w-4" />
            <span>Find Roommates</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-slate-800 text-gray-300 rounded-lg border border-gray-300 p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Housing Filters
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Gender Dropdown */}
            <div className="grid gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-gray-200 hover:text-black bg-slate-800 font-bold border-gray-300"
                  >
                    {gender === "any" && "Any Gender"}
                    {gender === "male" && "Male"}
                    {gender === "female" && "Female"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Gender</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={gender}
                    onValueChange={setGender}
                  >
                    <DropdownMenuRadioItem value="any">
                      Any Gender
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="male">
                      <User className="mr-2 h-4 w-4 text-gray-500" />
                      Male
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="female">
                      <User className="mr-2 h-4 w-4 text-gray-500" />
                      Female
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Sleeping Habits Dropdown */}
            <div className="grid gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-gray-200 hover:text-black bg-slate-800 font-bold border-gray-300"
                  >
                    {sleepingHabits === "any" && "Any Sleeping Habits"}
                    {sleepingHabits === "early" && "Early Riser"}
                    {sleepingHabits === "night" && "Night Owl"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Sleeping Habits</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={sleepingHabits}
                    onValueChange={setSleepingHabits}
                  >
                    <DropdownMenuRadioItem value="any">
                      Any Sleeping Habits
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="early">
                      <Sun className="mr-2 h-4 w-4 text-gray-500" />
                      Early Riser
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="night">
                      <Moon className="mr-2 h-4 w-4 text-gray-500" />
                      Night Owl
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Search with AI Box */}
            <div className="relative">
              <Search className="absolute left-4 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search with AI"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-9 p-3 pl-10 pr-10 rounded-lg border border-gray-300 bg-slate-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Sparkles className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Done Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              variant="outline"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  );
}
