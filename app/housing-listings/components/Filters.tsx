'use client'

import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"

export function Filters() {
  const [priceRange, setPriceRange] = useState([500, 3000])
  const [rooms, setRooms] = useState(1)
  const [moveInDate, setMoveInDate] = useState<Date>()

  const handleApplyFilters = () => {
    // Implement filter application logic here
    console.log('Applying filters:', { priceRange, rooms, moveInDate })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <Slider
            min={0}
            max={5000}
            step={100}
            value={priceRange}
            onValueChange={setPriceRange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Rooms: {rooms}
          </label>
          <Slider
            min={1}
            max={5}
            step={1}
            value={[rooms]}
            onValueChange={(value) => setRooms(value[0])}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Move-in Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {moveInDate ? format(moveInDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={moveInDate}
                onSelect={setMoveInDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <Button onClick={handleApplyFilters} className="w-full">
          Apply Filters
        </Button>
      </div>
    </div>
  )
}

