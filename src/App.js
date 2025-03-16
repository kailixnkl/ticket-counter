import React, { useState } from "react";
import CustomerView from "./CustomerView";

export default function App() {
  const [queue, setQueue] = useState([]); // Stores ticket numbers waiting
  const [lastNumber, setLastNumber] = useState(0); // Last ticket issued
  const [counters, setCounters] = useState([
    { id: 1, ticket: null, status: "available" },
    { id: 2, ticket: null, status: "available" },
    { id: 3, ticket: null, status: "available" },
    { id: 4, ticket: null, status: "available" },
  ]);

  const takeTicket = () => {
    const newTicket = lastNumber + 1;
    setQueue([...queue, newTicket]); 
    setLastNumber(newTicket);

    window.alert(`Your ticket number is: ${newTicket}`);
  };

  return (
    <div>
      <h1>Ticket Counter System</h1>
      <CustomerView takeTicket={takeTicket} lastNumber={lastNumber} queue={queue} counters={counters} />
    </div>
  );
}
