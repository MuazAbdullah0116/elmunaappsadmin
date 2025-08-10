import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface AddSetoranDatePickerProps {
  tanggal: Date | undefined;
  onTanggalChange: (date: Date | undefined) => void;
  className?: string;
}

const AddSetoranDatePicker: React.FC<AddSetoranDatePickerProps> = ({ tanggal, onTanggalChange, className }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="tanggal" className="text-white font-medium">
        Tanggal Setoran
      </Label>
      <input
        id="tanggal"
        type="date"
        value={tanggal ? tanggal.toISOString().split('T')[0] : ""}
        onChange={e => onTanggalChange(new Date(e.target.value))}
        className={className}
        required
      />
    </div>
  );
};

export default AddSetoranDatePicker;
