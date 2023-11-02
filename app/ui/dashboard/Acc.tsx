import React, { useState } from 'react';

interface AccProps {
  imageSrc: string;
  title: string;
  dropdownValues: string[];
  width: string;
  height: string;
}

const Acc: React.FC<AccProps> = ({ imageSrc, title, dropdownValues, width, height }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const containerStyle = {
    width: width || 'auto',
    height: height || 'auto',
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center" style={containerStyle}>
      <div className="mr-4">
        <img src={imageSrc} alt="Random Image" className="w-16 h-16" />
      </div>
      <div className="flex-grow">
        <p className="text-xl font-bold mb-2">{title}</p>
        <select
          value={selectedValue}
          onChange={handleDropdownChange}
          className="border p-2 w-full"
        >
          <option value="" disabled>
            Select an option
          </option>
          {dropdownValues.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Acc;
