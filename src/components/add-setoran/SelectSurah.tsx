import React from "react";

const SelectSurah = ({ value, onChange, availableSurahs, disabled, className }) => (
  <div className="space-y-2">
    <label htmlFor="surat" className="text-white font-medium">Surat</label>
    <select
      id="surat"
      value={value}
      onChange={e => onChange(e.target.value)}
      className={className}
      disabled={disabled}
      required
    >
      <option value="">Pilih Surat</option>
      {availableSurahs && availableSurahs.map(surah => (
        <option key={surah} value={surah}>{surah}</option>
      ))}
    </select>
  </div>
);

export default SelectSurah;
