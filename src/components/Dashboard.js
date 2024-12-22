import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import CarList from "./CarList";

function Dashboard() {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ make: "", model: "", year: "" });

  useEffect(() => {
    const fetchCars = async () => {
      const carCollection = collection(db, "cars");
      const carSnapshot = await getDocs(carCollection);
      setCars(carSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchCars();
  }, []);

  const addCar = async () => {
    if (newCar.make && newCar.model && newCar.year) {
      try {
        const carRef = await addDoc(collection(db, "cars"), newCar);
        setCars([...cars, { id: carRef.id, ...newCar }]);
        setNewCar({ make: "", model: "", year: "" }); // ล้างฟอร์ม
      } catch (error) {
        console.error("Error adding car:", error);
      }
    } else {
      alert("กรุณากรอกข้อมูลรถยนต์ให้ครบ");
    }
  };

  const deleteCar = async (id) => {
    try {
      await deleteDoc(doc(db, "cars", id)); // ลบข้อมูลจาก Firestore
      setCars(cars.filter((car) => car.id !== id)); // อัปเดต state
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <div>
      <h1>Car Booking Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Make"
          value={newCar.make}
          onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
        />
        <input
          type="text"
          placeholder="Model"
          value={newCar.model}
          onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={newCar.year}
          onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
        />
        <button onClick={addCar}>เพิ่มรถ</button>
      </div>
      <CarList cars={cars} deleteCar={deleteCar} />
    </div>
  );
}

export default Dashboard;