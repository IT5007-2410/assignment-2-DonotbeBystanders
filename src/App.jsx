import React, { useState } from 'react';
import './App.css'; // Optional for CSS styling

// Question 1: Initial traveller data stored in a React state variable
const initialTravellers = [
  { id: 1, name: 'Jack', phone: 88885555,time:new Date('2024-08-08 11:00:00').getTime() },
  { id: 2, name: 'Rose', phone: 88884444,time:new Date('2024-08-10 10:00:00').getTime() },
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
function timestampToDateTime(timestamp) {
  var date = new Date(timestamp); // 转换为Date对象
  var year = date.getFullYear(); // 获取年份
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // 获取月份，转为两位数
  var day = ("0" + date.getDate()).slice(-2); // 获取日，转为两位数
  var hours = ("0" + date.getHours()).slice(-2); // 获取小时，转为两位数
  var minutes = ("0" + date.getMinutes()).slice(-2); // 获取分钟，转为两位数
  var seconds = ("0" + date.getSeconds()).slice(-2); // 获取秒，转为两位数
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // 拼接字符串返回
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
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {travellers.map((traveller) => (
            <tr key={traveller.id}>
              <td>{traveller.id}</td>
              <td>{traveller.name}</td>
              <td>{traveller.phone}</td>
              <td>{timestampToDateTime(traveller.time)}</td>
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

    // Create a new traveller object
    const newTraveller = {
      id: travellers.length + 1, // Incremental ID
      name,
      phone,
      time:new Date().getTime()
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter out the traveller by name
    const updatedTravellers = travellers.filter(
      (traveller) => traveller.name.toLowerCase() !== name.toLowerCase()
    );

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
        <button className={currentPage=='displayTravellers' && 'active'} onClick={() => setCurrentPage('displayTravellers')}>Display Travellers</button>
        <button className={currentPage=='addTraveller' && 'active'} onClick={() => setCurrentPage('addTraveller')}>Add Traveller</button>
        <button className={currentPage=='deleteTraveller' && 'active'} onClick={() => setCurrentPage('deleteTraveller')}>Delete Traveller</button>
        <button className={currentPage=='displayFreeSeats' && 'active'} onClick={() => setCurrentPage('displayFreeSeats')}>Display Free Seats</button>
        <button className={currentPage=='visualSeats' && 'active'} onClick={() => setCurrentPage('visualSeats')}>Visual Seats</button>
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
