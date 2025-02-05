"use client";

import { useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import HousingFilterContent from "./HousingFilterContent";

const SearchBar = ({ housingFilters, setHousingFilters }) => {
  const {
    isDialogOpen,
    searchTerm,
    housingType,
    beds,
    baths,
    rentType,
    minPrice,
    maxPrice,
  } = housingFilters;


  const handleSearchTermChange = (e) => {
    setHousingFilters((prev) => ({ ...prev, searchTerm: e.target.value }));
  };

  const handleRentChange = (val: string) => {
    setHousingFilters((prev) => ({
      ...prev,
      rentType: val,
      minPrice: val !== "custom" ? "" : prev.minPrice, // Reset min/max if not custom
      maxPrice: val !== "custom" ? "" : prev.maxPrice,
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHousingFilters((prev) => ({ ...prev, isDialogOpen: false }));

    console.log("Search Term:", searchTerm);
    console.log("Housing Type:", housingType);
    console.log("Beds:", beds);
    console.log("Baths:", baths);

    if (rentType === "custom") {
      console.log("Custom Rent Range:", minPrice, "-", maxPrice);
    } else {
      console.log("Rent Type:", rentType);
    }
    // Add your search logic here
  };

  // Toggle dialog state on Ctrl key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Control") {
        setHousingFilters((prev) => ({
          ...prev,
          isDialogOpen: !prev.isDialogOpen,
        })); // Toggle dialog open/close
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setHousingFilters]);

  return (
    <form onSubmit={handleSearch} className="relative">
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) =>
          setHousingFilters((prev) => ({ ...prev, isDialogOpen: open }))
        }
      >
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal bg-slate-800 bg-opacity-80 text-gray-300 rounded-lg border border-gray-300"
          >
            <Search className="mr-2 h-4 w-4" />
            <span>Find Housing - Press Ctrl Anytime!</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] bg-slate-800 text-gray-300 rounded-lg border border-gray-300 p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Housing Filters
            </DialogTitle>
            <DialogDescription className="text-sm">
              {" "}
              Toggle this filter by pressing ctrl anytime!
            </DialogDescription>
          </DialogHeader>

          <HousingFilterContent
          housingFilters={housingFilters}
          setHousingFilters={setHousingFilters}
        />
      </DialogContent>
      </Dialog>
    </form>
  );
};

export default SearchBar;
