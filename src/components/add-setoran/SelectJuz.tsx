import React from "react";

const juzOptions = Array.from({ length: 30 }, (_, i) => (i + 1).toString());

const SelectJuz = ({ value, onChange, className }) => (
  <div className="space-y-2">
    <label htmlFor="juz" className="text-white font-medium">Juz</label>
    <select
      id="juz"
      value={value}
      onChange={e => onChange(e.target.value)}
      className={className}
      required
    >
      <option value="">Pilih Juz</option>
      {juzOptions.map(juz => (
        <option key={juz} value={juz}>{juz}</option>
      ))}
    </select>
  </div>
);

export default SelectJuz;