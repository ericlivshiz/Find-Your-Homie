"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Building,
  Home,
  Search,
  Sparkles,
  Bed,
  Bath,
  DollarSign,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CtrlDialogListener = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [housingType, setHousingType] = React.useState("all");
  const [beds, setBeds] = React.useState("any");
  const [baths, setBaths] = React.useState("any");

  // Rent filter: "noMax" | "noMin" | "custom"
  const [rentType, setRentType] = React.useState("noMax");
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      setIsDialogOpen(false);
  
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
  
    const handleRentChange = (val: string) => {
      setRentType(val);
      // If leaving custom, reset the fields
      if (val !== "custom") {
        setMinPrice("");
        setMaxPrice("");
      }
    };

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Toggle dialog state on Ctrl key press
        if (e.key === "Control") {
          setIsDialogOpen((prev) => !prev); // Toggle the dialog open/close
        }
      };
  
      // Add event listener for keydown event
      window.addEventListener("keydown", handleKeyDown);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []); // Empty dependency array ensures this effect runs once when component mounts
  

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-[425px] bg-slate-800 text-gray-300 rounded-lg border border-gray-300 p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Housing Filters
          </DialogTitle>
          <DialogDescription className="text-sm text-white"> Toggle this filter by pressing ctrl anytime!</DialogDescription>

        </DialogHeader>

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
                  onValueChange={setHousingType}
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
                <DropdownMenuRadioGroup value={beds} onValueChange={setBeds}>
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
                <DropdownMenuRadioGroup value={baths} onValueChange={setBaths}>
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
                    onChange={(e) => setMinPrice(e.target.value)}
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
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Search with AI Input */}
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

        <div className="flex justify-end">
          <Button
            variant="outline"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
            onClick={handleSearch}
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CtrlDialogListener;
