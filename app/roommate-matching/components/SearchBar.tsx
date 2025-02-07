import React, { useEffect, useState } from "react";
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
import {
  Search,
  Sparkles,
  User,
  Sun,
  Moon,
  UserMinus,
  Users,
  BeerOff,       // For no drinking
  CigaretteOff, // For no smoking
  WashingMachine,
  Trash2

} from "lucide-react";

export default function SearchBar() {
  // State management
  const [gender, setGender] = useState("any");
  const [sleepingHabits, setSleepingHabits] = useState("any");
  const [socialSkill, setSocialSkill] = useState("any");
  const [substanceUse, setSubstanceUse] = useState("any"); // NEW state for Substance Use
  const [cleanliness, setCleanliness] = useState("any");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle form submission
  const handleSearchRoommates = (e: React.FormEvent) => {
    // Handle search logic
    console.log({
      gender,
      sleepingHabits,
      socialSkill,
      substanceUse,
      cleanliness
    });
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Control" || e.key === "Meta") {
        setIsDialogOpen(!isDialogOpen);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

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
              Roommate Filters
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

            {/* Social Skills Dropdown */}
            <div className="grid gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-gray-200 hover:text-black bg-slate-800 font-bold border-gray-300"
                  >
                    {socialSkill === "any" && "Any Social Preference"}
                    {socialSkill === "introverted" && "Introverted"}
                    {socialSkill === "ambivert" && "Ambivert"}
                    {socialSkill === "extroverted" && "Extroverted"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Social Skills</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={socialSkill}
                    onValueChange={setSocialSkill}
                  >
                    <DropdownMenuRadioItem value="any">
                      Any Social Preference
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="introverted">
                      <UserMinus className="mr-2 h-4 w-4 text-gray-500" />
                      Introverted
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="ambivert">
                      <User className="mr-2 h-4 w-4 text-gray-500" />
                      Ambivert
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="extroverted">
                      <Users className="mr-2 h-4 w-4 text-gray-500" />
                      Extroverted
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Substance Use Dropdown */}
            <div className="grid gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-gray-200 hover:text-black bg-slate-800 font-bold border-gray-300"
                  >
                    {substanceUse === "any" && "Any Substance Use"}
                    {substanceUse === "noSmoking" && "No Smoking"}
                    {substanceUse === "noDrinking" && "No Drinking"}
                    {substanceUse === "soberLiving" && "Sober Living"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Substance Use</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={substanceUse}
                    onValueChange={setSubstanceUse}
                  >
                    <DropdownMenuRadioItem value="any">
                      Any Substance Use
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="noSmoking">
                      <CigaretteOff className="mr-2 h-4 w-4 text-gray-500" />
                      No Smoking
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="noDrinking">
                      <BeerOff className="mr-2 h-4 w-4 text-gray-500" />
                      No Drinking
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="soberLiving">
                      <Users className="mr-2 h-4 w-4 text-gray-500" />
                      Sober Living
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Cleanliness Dropdown */}
            <div className="grid gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-gray-200 hover:text-black bg-slate-800 font-bold border-gray-300"
                  >
                    {cleanliness === "any" && "Any Cleanliness Preference"}
                    {cleanliness === "spotless" && "Spotless"}
                    {cleanliness === "moderate" && "Moderate"}
                    {cleanliness === "cluttered" && "Cluttered"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Cleanliness</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={cleanliness}
                    onValueChange={setCleanliness}
                  >
                    <DropdownMenuRadioItem value="any">
                      Any Cleanliness Preference
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="spotless">
                      <Sparkles className="mr-2 h-4 w-4 text-gray-500" />
                      Spotless
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="moderate">
                      <WashingMachine className="mr-2 h-4 w-4 text-gray-500" />
                      Moderate
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="cluttered">
                      <Trash2 className="mr-2 h-4 w-4 text-gray-500" />
                      Cluttered
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
              onClick={handleSearchRoommates}
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </form>
  );
}
