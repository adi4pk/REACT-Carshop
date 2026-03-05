import type { CarItem } from "../models/CarItem";

type CarShape={
    car: CarItem;
    onEdit: (car: CarItem) => void;    
    // void - function does not return anything, it updates the state => causes a re-render

    onDelete: (car: CarItem) => void;
    

}

function Car({onEdit, onDelete, car}: CarShape) {
  
  return (
    <tr>
      <td> {car.id} </td>
      <td> {car.brand} </td>
      <td>{car.model}</td>
      <td>{car.color}</td>
      <td>{car.year}</td>
      <td>{car.price}</td>
      <td>{car.mileage}</td>
      <td>{car.size}</td>
      <td>{car.fuelType}</td>
      <td>{car.transmission}</td>
      <td>
        {car.available ? (
          <span className="badge badge-success">Available</span>
        ) : (
          <span className="badge badge-success">Not Available</span>
        )}
      </td>
      <td className="actions">
        <button className="btn btn-warning btn-sm"
          onClick={() => {
            onEdit(car);
                  
              }}
          >Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            onDelete(car);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Car