import React from "react";

function CarList({ cars, deleteCar }) {
  return (
    <div>
      <h2>Available Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} - {car.year}
            <button onClick={() => deleteCar(car.id)}>ลบ</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;