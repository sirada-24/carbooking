import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddCar() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "cars"), {
        make,
        model,
        year,
      });
      alert("Car added successfully!");
      setMake("");
      setModel("");
      setYear("");
    } catch (error) {
      console.error("Error adding car:", error.message);
    }
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;