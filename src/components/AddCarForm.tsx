import { useState, useEffect } from "react"
import type { CarItem } from "../models/CarItem";
// import Car from "./Car";

type AddCarProps={
  currentCar: CarItem | null;
  addCar: (car: CarItem) => void;
  arrCars: CarItem[];
}

function AddCarForm({addCar, currentCar, arrCars} : AddCarProps){

    const [brandInptValue, setBrandInptValue] = useState(currentCar?.brand || ""); //???
    const [modelInptValue, setModelInptValue] = useState("");
    const [colorInptValue, setColorInptValue] = useState("");
    const [sizeInptValue, setSizeInptValue] = useState(0);
    const [yearInptValue, setYearInptValue] = useState(0);
    const [priceInptValue, setPriceInptValue] = useState(0);
    const [mileageInptValue, setMileageInptValue] = useState(0);
    const [fuelTypeInptValue, setFuelTypeInptValue] = useState("");
    const [transmissionInptValue, setTransmissionInptValue] = useState("");
    const [isAvailable, setIsAvailable] = useState(Boolean);


    function handleAddCar(){

      if(brandInptValue == ""){
        console.log("Car Field cannot be empty");
        return;
      }

      let car: CarItem= {

          id: arrCars.length+1,
          brand: brandInptValue,
          model: modelInptValue,
          color: colorInptValue,
          size: sizeInptValue,
          year: yearInptValue,
          price: priceInptValue,
          mileage: mileageInptValue,
          fuelType: fuelTypeInptValue,
          transmission: transmissionInptValue,
          available: isAvailable,
      }

      addCar(car);
    }

    return(
        <div className="form-section">
          <h2>Add New Car</h2>
          <form id="carForm">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="brand">Brand *</label>
                <input
                  type="text"
                  id="brand"
                  required
                  placeholder="e.g. Toyota"
                  onChange={(event) => setBrandInptValue(event.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="model">Model *</label>
                <input
                  type="text"
                  id="model"
                  required
                  placeholder="e.g. Camry"
                  onChange={(event) => setModelInptValue(event.target.value)}

                ></input>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="color">Color *</label>
                <input
                  type="text"
                  id="color"
                  required
                  placeholder="e.g. Red"
                  onChange={(event) => setColorInptValue(event.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="year">Year *</label>
                <input
                  type="number"
                  id="year"
                  required
                  min="1886"
                  placeholder="e.g. 2023"
                  onChange={(event) => setYearInptValue(event.target.valueAsNumber)}
                ></input>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Price *</label>
                <input
                  type="number"
                  id="price"
                  required
                  min="0"
                  step="0.01"
                  placeholder="e.g. 25000"
                  onChange={(event) => setPriceInptValue(event.target.valueAsNumber)}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="mileage">Mileage *</label>
                <input
                  type="number"
                  id="mileage"
                  required
                  min="0"
                  placeholder="e.g. 50000"
                  onChange={(event) => setMileageInptValue(event.target.valueAsNumber)}
                ></input>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="size">Size *</label>
                <input
                  type="number"
                  id="size"
                  required
                  min="1"
                  placeholder="e.g. 4"
                  onChange={(event) => setSizeInptValue(event.target.valueAsNumber)}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="fuelType">Fuel Type *</label>
                <select
                  id="fuelType"
                  onChange={(event) => setFuelTypeInptValue(event.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="lpg">LPG</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="transmission">Transmission *</label>
              <select
                id="transmission"
                onChange={(event) => setTransmissionInptValue(event.target.value)}
              >
                <option value="">Select...</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
                <option value="cvt">CVT</option>
                <option value="semi-automatic">Semi-Automatic</option>
              </select>
            </div>

            <div className="form-group">
              <div className="checkbox-wrapper">
                <input
                  type="checkbox"
                  defaultChecked={isAvailable}
                  id="available"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setIsAvailable(event.target.checked)}
                ></input>
                <label htmlFor="available">Available for sale</label>
              </div>
            </div>

            <div className="btn-group">
              {currentCar? (
                <button
                // type="submit" // why is it submit? 
                type="button"
                className="btn btn-primary"
              >
                save changes
              </button>
              ): (
                <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddCar}
               >
                add new car
              </button>
              )} 

              {currentCar? (
                <button type="reset" className="btn btn-secondary">
                Reset
              </button>
              ): (
                <button type="reset" className="btn btn-secondary">
                Cancel
              </button>
              )}
            </div>
          </form>
        </div>
    )
        
}


export default AddCarForm