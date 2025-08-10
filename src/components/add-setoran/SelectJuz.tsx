import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface SelectJuzProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  itemClassName?: string;
}

const JUZ_OPTIONS = Array.from({ length: 30 }, (_, i) => ({
  value: (i + 1).toString(),
  label: `Juz ${i + 1}`,
}));

const SelectJuz: React.FC<SelectJuzProps> = ({
  value,
  onChange,
  className,
  itemClassName = "",
}) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger className={className}>
      <SelectValue placeholder="Pilih Juz" />
    </SelectTrigger>
    <SelectContent>
      {JUZ_OPTIONS.map((juz) => (
        <SelectItem
          key={juz.value}
          value={juz.value}
          className={itemClassName}
        >
          {juz.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default SelectJuz;