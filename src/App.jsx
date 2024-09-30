import React, { useState } from 'react';

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

function App() {
  // Question 1: Store travellers in a state variable
  const [travellers, setTravellers] = useState(initialTravellers);

  // Question 2: State variable to track the current page being displayed
  const [currentPage, setCurrentPage] = useState('displayTravellers');

  return (
    <div>
      {/* Question 2: Navigation Bar */}
      <nav>
        <button onClick={() => setCurrentPage('displayTravellers')}>Display Travellers</button>
        <button onClick={() => setCurrentPage('addTraveller')}>Add Traveller</button>
        <button onClick={() => setCurrentPage('deleteTraveller')}>Delete Traveller</button>
        <button onClick={() => setCurrentPage('displayFreeSeats')}>Display Free Seats</button>
      </nav>

      {/* Question 2: Conditional Rendering based on current page */}
      {currentPage === 'displayTravellers' && <DisplayTravellers travellers={travellers} />}
      {currentPage === 'addTraveller' && <AddTraveller travellers={travellers} setTravellers={setTravellers} />}
      {currentPage === 'deleteTraveller' && <DeleteTraveller travellers={travellers} setTravellers={setTravellers} />}
      {currentPage === 'displayFreeSeats' && <DisplayFreeSeats travellers={travellers} />}
    </div>
  );
}

export default App;

class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
        {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
        <button>Add</button>
      </form>
    );
  }
}


class Delete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
        {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
        <button>Delete</button>
      </form>
    );
  }
}

class Homepage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
      </div>);
  }
}
class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], selector: 1 };
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
  }

  setSelector(value) {
    /*Q2. Function to set the value of component selector variable based on user's button click.*/
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ travellers: initialTravellers });
    }, 500);
  }

  bookTraveller(passenger) {
    /*Q4. Write code to add a passenger to the traveller state variable.*/
  }

  deleteTraveller(passenger) {
    /*Q5. Write code to delete a passenger from the traveller state variable.*/
  }
  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
        <div>
          {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
        </div>
        <div>
          {/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
          {/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
          {/*Q3. Code to call component that Displays Travellers.*/}

          {/*Q4. Code to call the component that adds a traveller.*/}
          {/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
        </div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
