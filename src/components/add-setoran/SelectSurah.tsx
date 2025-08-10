import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface Surah {
  nomor: number;
  nama: string;
}

interface SelectSurahProps {
  value: string;
  onChange: (value: string) => void;
  availableSurahs: Surah[];
  disabled?: boolean;
  className?: string;
  itemClassName?: string;
}

const SelectSurah: React.FC<SelectSurahProps> = ({
  value,
  onChange,
  availableSurahs,
  disabled,
  className,
  itemClassName = "",
}) => (
  <Select value={value} onValueChange={onChange} disabled={disabled}>
    <SelectTrigger className={className}>
      <SelectValue placeholder="Pilih Surat" />
    </SelectTrigger>
    <SelectContent>
      {availableSurahs.map((surah) => (
        <SelectItem
          key={surah.nomor}
          value={surah.nama}
          className={itemClassName}
        >
          {surah.nama}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default SelectSurah;

<SelectJuz
  value={formData.juz}
  onChange={...}
  className="..."
  itemClassName="hover:bg-gray-300 data-[state=checked]:bg-gray-300 text-black"
/>
<SelectSurah
  value={formData.surat}
  onChange={...}
  availableSurahs={availableSurahs}
  disabled={!formData.juz}
  className="..."
  itemClassName="hover:bg-gray-300 data-[state=checked]:bg-gray-300 text-black"
/>
