import React from "react";

const AddSetoranExaminerInput = ({ diujiOleh, onDiujiOlehChange, className }) => (
  <div className="space-y-2">
    <label htmlFor="diuji_oleh" className="text-white font-medium">Diuji Oleh</label>
    <input
      id="diuji_oleh"
      type="text"
      placeholder="Nama penguji"
      value={diujiOleh}
      onChange={e => onDiujiOlehChange(e.target.value)}
      className={className}
      required
    />
  </div>
);

export default AddSetoranExaminerInput;
