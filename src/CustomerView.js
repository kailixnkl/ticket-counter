import React from "react";

export default function CustomerView({ takeTicket, lastNumber, queue, counters }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Customer View</h2>
      
      <div style={{
        border: "1px solid black", padding: "20px", display: "inline-block", marginBottom: "20px"
      }}>
        <p><strong>Now Serving:</strong> {queue.length > 0 ? queue[0] : "--"}</p>
        <p><strong>Last Number:</strong> {lastNumber}</p>
        <button onClick={takeTicket} style={{ padding: "10px 20px" }}>
          Take a Number
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {counters.map((counter) => (
          <div key={counter.id} style={{
            border: "1px solid black", padding: "15px", textAlign: "center",
            width: "120px", position: "relative"
          }}>
            <h3>Counter {counter.id}</h3>
            <p>{counter.ticket ? `Serving: ${counter.ticket}` : "--"}</p>

            <div style={{
              width: "15px", height: "15px", borderRadius: "50%",
              backgroundColor: counter.status === "serving" ? "red" : "green",
              position: "absolute", top: "5px", right: "5px"
            }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
