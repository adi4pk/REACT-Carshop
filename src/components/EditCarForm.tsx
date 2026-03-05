import { useState, useEffect, type CanvasHTMLAttributes } from "react";
import type { CarItem } from "../models/CarItem";
import Car from "./Car";

type EditCarProps={
    currentCar: CarItem | null;
    resetBtn: (car: CarItem) => void;
    saveChangesBtn: (car: CarItem) => void;
    setCurrentCar: (car: CarItem) => void;
}


function EditCarForm({currentCar, setCurrentCar, resetBtn, saveChangesBtn} : EditCarProps){

  const [brandInptValue, setBrandInptValue] = useState(currentCar?.brand || "");

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
                  value={currentCar?.brand}
                  // onChange={(event) => currentCar?.brand == event.target.value}
                  onChange={(event) => currentCar && setCurrentCar({...currentCar, brand: event.target.value})}
                  
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="model">Model *</label>
                <input
                  type="text"
                  id="model"
                  required
                  placeholder="e.g. Camry"
                  value={currentCar?.model}
                  onChange={(event) => currentCar && setCurrentCar({...currentCar, model: event.target.value})}
                 

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
                  value={currentCar?.color}
                  onChange={(event) => currentCar && setCurrentCar({...currentCar, color: event.target.value})}
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
                  value={currentCar?.year}
                  onChange={(event) => currentCar && setCurrentCar({...currentCar, year: event.target.valueAsNumber})}
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
                  value={currentCar?.price}
                  onChange={(event)=> currentCar && setCurrentCar({...currentCar, price: event.target.valueAsNumber})}
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
                  value={currentCar?.mileage}
                  onChange={(event) => currentCar && setCurrentCar({...currentCar, mileage: event.target.valueAsNumber})}
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
                  value={currentCar?.size}
                  onChange={(event) => currentCar && setCurrentCar({...currentCar, size: event.target.valueAsNumber})}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="fuelType">Fuel Type *</label>
                <select
                  id="fuelType"
                  value={currentCar?.fuelType}
                  onChange={(event) => currentCar && setCurrentCar({...currentCar, fuelType: event.target.value})}
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
                value={currentCar?.transmission}
                onChange={(event) => currentCar && setCurrentCar({...currentCar, transmission: event.target.value})}
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
                //   defaultChecked={isAvailable}
                  id="available"
                  checked={currentCar?.available}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => currentCar && setCurrentCar({...currentCar, available: event.target.checked})}
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
                onClick={() => saveChangesBtn(currentCar)}
              >
                save changes
              </button>
              ): (
                <button
                type="button"
                className="btn btn-primary"
               >
                add new car
              </button>
              )} 

              {currentCar? (
                <button type="reset" className="btn btn-secondary"
                onClick={() => resetBtn(currentCar)}>
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

export default EditCarForm