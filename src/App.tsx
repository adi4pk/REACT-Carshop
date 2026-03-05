import { useState } from 'react'
import type { CarItem } from './models/CarItem';
import type { CarResponseList } from './models/CarResponseList';
import Car from './components/Car';

import AddCarForm from './components/AddCarForm';
import EditCarForm from './components/EditCarForm'

function App() {

  const initialCars: CarItem[]=[
  {id:1, brand:"test1",model: "bmw", color:"blue", size: 5, year: 1996, price: 2000, mileage: 130000, fuelType:"diesel",transmission:"manual", available: true},
  {id:2, brand:"test2",model: "mercedes", color:"black", size: 5, year: 2005, price: 6000, mileage: 90000, fuelType:"diesel",transmission:"manual", available: true},
  {id:3, brand:"car3",model: "audi", color:"green", size: 5, year: 2019, price: 21000, mileage: 15000, fuelType:"gasoline",transmission:"manual", available: true},
  {id:4, brand:"auto4",model: "porsche", color:"red", size: 5, year: 2022, price: 25000, mileage: 8000, fuelType:"electric",transmission:"manual", available: true},

]

  
  const [carList, setCarList] = useState<CarItem[]>(initialCars);

  const [selectedCar, setSelectedCar] = useState<CarItem | null>(null)

  function handleEditCarBtn(car: CarItem){
    console.log('Clicked car:', car);   // prints object directly
    setSelectedCar(car);          //async, runs after console.log
    console.log(selectedCar);     //prints object through state Setter (async)
  }



  function handleSaveEditCar(car: CarItem){
    setCarList(prevList => prevList.map(item => item.id === car?.id ? {...car}: item));
    console.log("successfull");
    if(car?.brand == ""){
      console.log("Field cannot be empty - BRAND")
      return;
    } else if(car?.model ==""){
      console.log("Field cannot be empty - MODEL")
      return;
    } else if(car?.color == ""){
      console.log("Field cannot be empty - COLOR")
      return;
    } else if(car?.size == 0){
      console.log("size value cannot be zero")
      return;
    } else if(car?.year == 0){
      console.log("Year cannot be zero")
      return;
    } else if(car?.price == 0){
      console.log("price cannot be zero");
      return;
    } else if(car?.mileage == 0){
      console.log("mileage cannot be zero");
      return;
    } else if(car?.fuelType ==""){
      console.log("please select one of the Fuel Type");
      return;
    } else if(car?.transmission == ""){
      console.log("please select the transmission type.")
      return;
    }
    setSelectedCar(null);
  }



  function handleDeleteCarBtn(car: CarItem){
    let newList = carList.filter(item => item.id !== car.id);
    setCarList(newList);
  }

  function handleAddCar(car: CarItem){
    
    let arr = [...carList];

      arr.push(car);
      setCarList(arr);

  }
  
  function resetEditCar(car: CarItem){
    console.log(selectedCar);
    setSelectedCar(null);
    
  }

  return (
    <>
    <div className="container">
      {selectedCar?(
      <EditCarForm
      currentCar={selectedCar}
      setCurrentCar={setSelectedCar}
      resetBtn={resetEditCar}
      saveChangesBtn={handleSaveEditCar}
      />
      ): (
      <AddCarForm 
      currentCar={selectedCar}
      addCar={handleAddCar}
      arrCars={carList}
      />
      )}
      
      <main>
        
          <div className="table-section">
            <h2>Cars List</h2>
            <table className="cars-container">
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Color</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Mileage</th>
                    <th>Size</th>
                    <th>Fuel</th>
                    <th>Trans.</th>
                  </tr>
              </thead>
              <tbody>
                {carList.map((car, index) => (
                  <Car
                  key= {car.id}   // key should be generated inside the PARENT Component, not the child.
                    car={car}
                    onEdit={handleEditCarBtn}
                    onDelete={handleDeleteCarBtn}
                  />
                ))}
              </tbody>
            </table>
          </div>
        
      </main>
     </div> 
    </>
  );
}

export default App
