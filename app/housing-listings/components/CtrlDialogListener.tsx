import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import HousingFilterContent from "./HousingFilterContent";


interface HousingFilters {
  isDialogOpen: boolean;
  searchTerm: string;
  housingType: string;
  beds: string;
  baths: string;
  rentType: string;
  minPrice: string;
  maxPrice: string;
}

const CtrlDialogListener = ({
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
    beds,
    baths,
    rentType,
    minPrice,
    maxPrice,
  } = housingFilters;

  // Toggle dialog state on Ctrl key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Control") {
        console.log("Toggling the dialog via Ctrl key");
        setHousingFilters((prev) => ({
          ...prev,
          isDialogOpen: !prev.isDialogOpen,
        }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setHousingFilters]);

  return (
    <Dialog open={isDialogOpen}>
      <DialogContent
        // Prevent outside clicks or ESC from closing the dialog
        // so that only Ctrl key toggles it
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        className="sm:max-w-[425px] bg-slate-800 text-gray-300 rounded-lg border border-gray-300 p-6"
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Housing Filters
          </DialogTitle>
          <DialogDescription className="text-sm">
            Toggle this filter by pressing Ctrl anytime!
          </DialogDescription>
        </DialogHeader>
        <HousingFilterContent housingFilters={housingFilters} setHousingFilters={setHousingFilters} />

      </DialogContent>
    </Dialog>
  );
};

export default CtrlDialogListener;
