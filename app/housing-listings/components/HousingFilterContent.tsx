import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Search,
  Sparkles,
  Home,
  Building,
  Bed,
  Bath,
  DollarSign,
} from "lucide-react";

interface HousingFilters {
  isDialogOpen: boolean;
  searchTerm: string;
  housingType: string;
  occupancy: string;
  beds: string;
  baths: string;
  rentType: string;
  minPrice: string;
  maxPrice: string;
}

const HousingFilterContent = ({
  housingFilters,
  setHousingFilters,
}: {
  housingFilters: HousingFilters;
  setHousingFilters: React.Dispatch<React.SetStateAction<HousingFilters>>;
}) => {
  const {
    isDialogOpen,
    searchTerm,
    housingType,
    occupancy,
    beds,
    baths,
    rentType,
    minPrice,
    maxPrice,
  } = housingFilters;

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHousingFilters((prev) => ({ ...prev, searchTerm: e.target.value }));
  };

  const handleRentChange = (val: string) => {
    setHousingFilters((prev) => ({
      ...prev,
      rentType: val,
      // Reset min/max if not custom
      minPrice: val !== "custom" ? "" : prev.minPrice,
      maxPrice: val !== "custom" ? "" : prev.maxPrice,
    }));
  };

  const handleOccupancyChange = (val: string) => {
    setHousingFilters((prev) => ({ ...prev, occupancy: val }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Close on "Done" button (if that is desired)
    setHousingFilters((prev) => ({ ...prev, isDialogOpen: false }));

    // ... your search logic ...
    console.log("Search Term:", searchTerm);
    console.log("Housing Type:", housingType);
    console.log("Beds:", beds);
    console.log("Baths:", baths);
    if (rentType === "custom") {
      console.log("Custom Rent Range:", minPrice, "-", maxPrice);
    } else {
      console.log("Rent Type:", rentType);
    }
  };
  return (
    <div>
      <div className="grid gap-4 py-4">
        {/* Housing Type Dropdown */}
        <div className="grid gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-200 hover:text-black bg-slate-800 font-bold border-gray-300"
              >
                {housingType === "all" && <Home className="mr-2 h-4 w-4" />}
                {housingType === "company" && (
                  <Building className="mr-2 h-4 w-4" />
                )}
                {housingType === "sublease" && (
                  <Home className="mr-2 h-4 w-4" />
                )}
                {housingType === "all" && "All Housing"}
                {housingType === "company" && "Company Housing"}
                {housingType === "sublease" && "Subleases"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Housing Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={housingType}
                onValueChange={(val) =>
                  setHousingFilters((prev) => ({ ...prev, housingType: val }))
                }
              >
                <DropdownMenuRadioItem value="all">
                  <Home className="mr-2 h-4 w-4" />
                  All Housing
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="company">
                  <Building className="mr-2 h-4 w-4" />
                  Company Housing
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="sublease">
                  <Home className="mr-2 h-4 w-4" />
                  Subleases
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Occupancy Dropdown */}
        <div className="grid gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-200 hover:text-black bg-slate-800 font-bold border-gray-300"
              >
                {housingFilters.occupancy === "any" && (
                  <Bed className="mr-2 h-4 w-4" />
                )}
                {housingFilters.occupancy === "one" && (
                  <Bed className="mr-2 h-4 w-4" />
                )}
                {housingFilters.occupancy === "two" && (
                  <Bed className="mr-2 h-4 w-4" />
                )}
                {housingFilters.occupancy === "three" && (
                  <Bed className="mr-2 h-4 w-4" />
                )}
                {housingFilters.occupancy === "four" && (
                  <Bed className="mr-2 h-4 w-4" />
                )}
                {housingFilters.occupancy === "five" && (
                  <Bed className="mr-2 h-4 w-4" />
                )}
                {housingFilters.occupancy === "any" && "Any Occupancy"}
                {housingFilters.occupancy === "one" && "One Person"}
                {housingFilters.occupancy === "two" && "Two People"}
                {housingFilters.occupancy === "three" && "Three People"}
                {housingFilters.occupancy === "four" && "Four People"}
                {housingFilters.occupancy === "five" && "Five People"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Occupancy</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={housingFilters.occupancy}
                onValueChange={(val) =>
                  setHousingFilters((prev) => ({ ...prev, occupancy: val }))
                }
              >
                <DropdownMenuRadioItem value="any">
                  <Bed className="mr-2 h-4 w-4" />
                  Any Occupancy
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="one">
                  <Bed className="mr-2 h-4 w-4" />
                  One Person
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="two">
                  <Bed className="mr-2 h-4 w-4" />
                  Two People
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="three">
                  <Bed className="mr-2 h-4 w-4" />
                  Three People
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="four">
                  <Bed className="mr-2 h-4 w-4" />
                  Four People
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="five">
                  <Bed className="mr-2 h-4 w-4" />
                  Five People
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Beds Dropdown */}
        <div className="grid gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-200 hover:text-black bg-slate-800 font-bold border-gray-300"
              >
                {beds === "any" && <Bed className="mr-2 h-4 w-4" />}
                {beds === "1" && <Bed className="mr-2 h-4 w-4" />}
                {beds === "2" && <Bed className="mr-2 h-4 w-4" />}
                {beds === "3" && <Bed className="mr-2 h-4 w-4" />}
                {beds === "4+" && <Bed className="mr-2 h-4 w-4" />}
                {beds === "any" && "Any # of Beds"}
                {beds === "1" && "1 Bed"}
                {beds === "2" && "2 Beds"}
                {beds === "3" && "3 Beds"}
                {beds === "4+" && "4+ Beds"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Beds</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={beds}
                onValueChange={(val) =>
                  setHousingFilters((prev) => ({ ...prev, beds: val }))
                }
              >
                <DropdownMenuRadioItem value="any">
                  <Bed className="mr-2 h-4 w-4" />
                  Any # of Beds
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="1">
                  <Bed className="mr-2 h-4 w-4" />1 Bed
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2">
                  <Bed className="mr-2 h-4 w-4" />2 Beds
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="3">
                  <Bed className="mr-2 h-4 w-4" />3 Beds
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="4+">
                  <Bed className="mr-2 h-4 w-4" />
                  4+ Beds
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Baths Dropdown */}
        <div className="grid gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-200 hover:text-black bg-slate-800 font-bold border-gray-300"
              >
                {baths === "any" && <Bath className="mr-2 h-4 w-4" />}
                {baths === "1" && <Bath className="mr-2 h-4 w-4" />}
                {baths === "2" && <Bath className="mr-2 h-4 w-4" />}
                {baths === "3" && <Bath className="mr-2 h-4 w-4" />}
                {baths === "4+" && <Bath className="mr-2 h-4 w-4" />}
                {baths === "any" && "Any # of Baths"}
                {baths === "1" && "1 Bath"}
                {baths === "2" && "2 Baths"}
                {baths === "3" && "3 Baths"}
                {baths === "4+" && "4+ Baths"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Baths</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={baths}
                onValueChange={(val) =>
                  setHousingFilters((prev) => ({ ...prev, baths: val }))
                }
              >
                <DropdownMenuRadioItem value="any">
                  <Bath className="mr-2 h-4 w-4" />
                  Any # of Baths
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="1">
                  <Bath className="mr-2 h-4 w-4" />1 Bath
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="2">
                  <Bath className="mr-2 h-4 w-4" />2 Baths
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="3">
                  <Bath className="mr-2 h-4 w-4" />3 Baths
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="4+">
                  <Bath className="mr-2 h-4 w-4" />
                  4+ Baths
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Rent Dropdown */}
        <div className="grid gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-200 hover:text-black bg-slate-800 font-bold border-gray-300"
              >
                <DollarSign className="mr-2 h-4 w-4" />
                {rentType === "noMax" && "Min - Max Price"}
                {rentType === "noMin" && "Max - Min Price"}
                {rentType === "custom" && "Custom Range"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Rent</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={rentType}
                onValueChange={(val) => handleRentChange(val)}
              >
                <DropdownMenuRadioItem value="noMax">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Min - Max Price
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="noMin">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Max - Min Price
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="custom">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Custom Range
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* If user selects 'custom', show inline inputs here */}
          {rentType === "custom" && (
            <div className="mt-3 space-y-2 p-3 border border-gray-600 rounded-md">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-200 font-semibold">
                  Min
                </label>
                <input
                  type="number"
                  className="w-20 p-1 rounded bg-slate-700 text-gray-200 border border-gray-500 focus:outline-none"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) =>
                    setHousingFilters((prev) => ({
                      ...prev,
                      minPrice: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-200 font-semibold">
                  Max
                </label>
                <input
                  type="number"
                  className="w-20 p-1 rounded bg-slate-700 text-gray-200 border border-gray-500 focus:outline-none"
                  placeholder="9999"
                  value={maxPrice}
                  onChange={(e) =>
                    setHousingFilters((prev) => ({
                      ...prev,
                      maxPrice: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={() => {
                    // Save the min and max prices, and close custom range
                    setHousingFilters((prev) => ({
                      ...prev,
                      rentType: "custom", // Ensure the rent type is saved as custom
                    }));
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-200"
                >
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search with AI"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="w-full h-9 p-3 pl-10 pr-10 rounded-lg border border-gray-300 bg-slate-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Sparkles className="absolute right-2 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button
          variant="outline"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
          onClick={handleSearch}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default HousingFilterContent;
