import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectJuzProps {
  value: string;
  onChange: (v: string) => void;
}

const SelectJuz: React.FC<SelectJuzProps> = ({ value, onChange }) => (
  <div className="space-y-2">
    <Label htmlFor="juz" className="text-white font-medium">
      Juz *
    </Label>Surahs: Surah[];
    <Select value={value} onValueChange={onChange}> boolean;
      <SelectTrigger className="bg-white bg-opacity-20 border border-emerald-300 text-white placeholder:text-white/70 focus:border-emerald-400 rounded px-3 py-2 w-full">
        <SelectValue placeholder="Pilih Surat" />
      </SelectTrigger> ({
      <SelectContent className="bg-gray-900 border-emerald-700 text-white">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((juz) => (
  availableSurahs,tem key={juz} value={juz.toString()} className="hover:bg-emerald-700 focus:bg-emerald-700 text-white">
  disabled  Juz {juz}
}) => (   </SelectItem>
  <div className="space-y-2">
    <Label htmlFor="surat" className="text-white font-medium">nt-medium">
      Surat *
    </Label>
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className="bg-background border border-emerald-600 text-white hover:border-emerald-400">
        <SelectValue placeholder={disabled ? "Pilih juz terlebih dahulu" : "Pilih surat"} />hulu" : "Pilih surat"} />
      </SelectTrigger>hs.map((surat) => (
      <SelectContent className="bg-gray-900 border-emerald-700 text-white">r:bg-emerald-700 focus:bg-emerald-700 text-white">
        {availableSurahs.map((surat) => (
          <SelectItem key={surat.value} value={surat.value} className="hover:bg-emerald-700 focus:bg-emerald-700 text-white">
            {surat.label}
          </SelectItem>
        ))}t>
      </SelectContent>
    </Select>
  </div>
);port default SelectSurah;
export default SelectSurah;