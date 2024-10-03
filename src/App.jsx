import React, { useState } from 'react';
import './App.css'; // Optional for CSS styling

// Question 1: Initial traveller data stored in a React state variable
const initialTravellers = [
  { id: 1, name: 'Jack', phone: 88885555 },
  { id: 2, name: 'Rose', phone: 88884444 },
];

// Component to display total free seats (Part of Question 2)
function DisplayFreeSeats({ travellers }) {
  const totalSeats = 10;
  const freeSeats = totalSeats - travellers.length;

  return (
    <div>
      <h2>Free Seats: {freeSeats}</h2>
    </div>
  );
}

// Question 3: Component to display list of travellers in a table format
function DisplayTravellers({ travellers }) {
  return (
    <div>
      <h2>Travellers List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {travellers.map((traveller) => (
            <tr key={traveller.id}>
              <td>{traveller.id}</td>
              <td>{traveller.name}</td>
              <td>{traveller.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Question 4: Component to add a new traveller
function AddTraveller({ travellers, setTravellers }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (travellers.length == 10) {
      return alert("The passenger information is full and cannot be added.")
    }
    // Create a new traveller object
    const newTraveller = {
      id: travellers.length + 1, // Incremental ID
      name,
      phone,
    };

    // Update the travellers state with the new traveller
    setTravellers([...travellers, newTraveller]);

    // Reset form fields
    setName('');
    setPhone('');
  };

  return (
    <div>
      <h2>Add Traveller</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Add Traveller</button>
      </form>
    </div>
  );
}

// Question 5: Component to delete a traveller
function DeleteTraveller({ travellers, setTravellers }) {
  const [name, setName] = useState('');

  const findByName = (name, data) => {
    // 遍历数组对象
    for (let i = 0; i < data.length; i++) {
      // 检查当前对象的 name 属性是否匹配
      if (data[i].name.toLowerCase() === name.toLowerCase()) {
        return true; // 找到匹配的对象，返回 true
      }
    }
    // 如果没有找到匹配的对象，返回 false
    return false;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!findByName(name,travellers)) {
      return alert("Passenger information not found")
    }
    // Filter out the traveller by name
    const updatedTravellers = travellers.filter(
      (traveller) => traveller.name.toLowerCase() !== name.toLowerCase()
    );

    console.log(updatedTravellers, "1")

    // Update the travellers state with the remaining travellers
    setTravellers(updatedTravellers);

    // Reset form field
    setName('');
  };

  return (
    <div>
      <h2>Delete Traveller</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Traveller Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Delete Traveller</button>
      </form>
    </div>
  );
}

// Question 6: Component to display visual representation of seats
function VisualSeats({ travellers }) {
  const totalSeats = 10;
  const seats = Array.from({ length: totalSeats });

  return (
    <div>
      <h2>Seat Layout</h2>
      <div className="seat-layout">
        {seats.map((_, index) => (
          <button
            key={index}
            className={
              index < travellers.length ? 'seat occupied' : 'seat free'
            }
          >
            {index < travellers.length ? 'Occupied' : 'Free'}
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  // Question 1: Store travellers in a state variable
  const [travellers, setTravellers] = useState(initialTravellers);

  // Question 2: State variable to track the current page being displayed
  const [currentPage, setCurrentPage] = useState('displayTravellers');

  return (
    <div>
      {/* Question 2: Navigation Bar */}
      <nav>
        <button className={currentPage == 'displayTravellers' && 'active'} onClick={() => setCurrentPage('displayTravellers')}>Display Travellers</button>
        <button className={currentPage == 'addTraveller' && 'active'} onClick={() => setCurrentPage('addTraveller')}>Add Traveller</button>
        <button className={currentPage == 'deleteTraveller' && 'active'} onClick={() => setCurrentPage('deleteTraveller')}>Delete Traveller</button>
        <button className={currentPage == 'displayFreeSeats' && 'active'} onClick={() => setCurrentPage('displayFreeSeats')}>Display Free Seats</button>
        <button className={currentPage == 'visualSeats' && 'active'} onClick={() => setCurrentPage('visualSeats')}>Visual Seats</button>
      </nav>

      {/* Question 2: Conditional Rendering based on current page */}
      {currentPage === 'displayTravellers' && <DisplayTravellers travellers={travellers} />}
      {currentPage === 'addTraveller' && <AddTraveller travellers={travellers} setTravellers={setTravellers} />}
      {currentPage === 'deleteTraveller' && <DeleteTraveller travellers={travellers} setTravellers={setTravellers} />}
      {currentPage === 'displayFreeSeats' && <DisplayFreeSeats travellers={travellers} />}
      {currentPage === 'visualSeats' && <VisualSeats travellers={travellers} />}
    </div>
  );
}

export default App;
