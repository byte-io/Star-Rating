import { useState } from "react";
import "./styles.css";

export default function App() {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(0);
  const value = hoverRating || currentRating;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="Star"
          style={{
            color: star <= value ? "gold" : "lightgrey",
          }}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => setCurrentRating(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}
