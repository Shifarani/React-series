import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");

  const buttonStyle = {
    padding: "6px 12px",   
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",      
    fontWeight: "bold",
    color: "white",
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          marginBottom: "40px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{ ...buttonStyle, backgroundColor: "#ff6b6b" }} // light red
          onClick={() => setColor("#ff6b6b")}
        >
          Red
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#74c0fc" }} // light blue
          onClick={() => setColor("#74c0fc")}
        >
          Blue
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#69db7c" }} // light green
          onClick={() => setColor("#69db7c")}
        >
          Green
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#ffa94d" }} // light orange
          onClick={() => setColor("#ffa94d")}
        >
          Orange
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#b197fc" }} // light purple
          onClick={() => setColor("#b197fc")}
        >
          Purple
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#63e6be" }} // mint
          onClick={() => setColor("#63e6be")}
        >
          Mint
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#ffd43b", color: "black" }} // yellow
          onClick={() => setColor("#ffd43b")}
        >
          Yellow
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#adb5bd" }} // gray
          onClick={() => setColor("#adb5bd")}
        >
          Gray
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#212529" }}
          onClick={() => setColor("#212529")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;