import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface AddSetoranExaminerInputProps {
  diujiOleh: string;
  onDiujiOlehChange: (v: string) => void;
}

const AddSetoranExaminerInput: React.FC<AddSetoranExaminerInputProps> = ({
  diujiOleh,
  onDiujiOlehChange,
}) => (
  <div className="mb-6">
    <Label htmlFor="diujiOleh" className="block text-white text-sm font-bold mb-2">
      Diuji Oleh *
    </Label>
    <Input
      type="text"
      id="diujiOleh"
      placeholder="Nama Penguji"
      value={diujiOleh}
      onChange={(e) => onDiujiOlehChange(e.target.value)}
      className="bg-white bg-opacity-20 border border-emerald-300 text-white placeholder:text-white/70 focus:border-emerald-400 rounded px-3 py-2 w-full"
    />
  </div>
);

export default AddSetoranExaminerInput;
