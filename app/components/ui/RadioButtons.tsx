interface RadioButtonsProps {
  areas: string[];
  setSelectedArea: (area: string) => void;
  selectedArea: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  areas,
  selectedArea,
  setSelectedArea,
}) => {
  const handleAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedArea(event.target.value);
  };

  return (
    <div className="flex gap-2 text-slate-800">
      <p className="font-bold mr-2">Filter by area:</p>
      {areas.map((area) => (
        <label key={area}>
          <input
            type="radio"
            name="area"
            value={area}
            checked={selectedArea === area}
            onChange={handleAreaChange}
            className="mr-1"
          />
          {area}
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
