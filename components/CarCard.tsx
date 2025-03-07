// CarCard.tsx
import React from "react";

const CarCard = ({ car }:any) => {
  return (
    <div>
      {/* Render car details */}
      <h3>{car.name}</h3>
      {/* Other car details */}
    </div>
  );
};

export default CarCard;
