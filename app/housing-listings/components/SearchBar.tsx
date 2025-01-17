"use client";

import React from "react";
import { Building, Home, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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

export function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [housingType, setHousingType] = React.useState("all");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleSearch = (e: React.FormEvent) => {
    setIsDialogOpen(false);
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    console.log("Housing Type:", housingType);
    // Add your search logic here
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal bg-slate-800 bg-opacity-80 text-gray-300 rounded-lg border border-gray-300"
          >
            <Search className="mr-2 h-4 w-4" />
            <span>Find Housing</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-slate-800 text-gray-300 rounded-lg border border-gray-300 p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Housing Filters
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
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
                      <Home className="mr-2 h-4 w-4" /> All Housing
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="company">
                      <Building className="mr-2 h-4 w-4" /> Company Housing
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="sublease">
                      <Home className="mr-2 h-4 w-4" /> Subleases
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
    </form>
  );
}
