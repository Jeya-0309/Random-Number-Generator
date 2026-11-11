
import { useState } from "react";
import "./RandomGenerator.css";

const RandomGenerator = () => {
    const [result, setResult] = useState(null);

    const generateRandom = () => {
        setResult(Math.floor(Math.random() * 100) + 1);
    };

    return (
        <div className="random-container">
            <div className="random-card">
                <h1>Random Number Generator</h1>

                <div className="number-display">
                    {result !== null
                        ? result
                        : "?"}
                </div>

                <p className="message">
                    {result !== null
                        ? "Your lucky number is!"
                        : "No number generated yet"}
                </p>

                <button onClick={generateRandom}>
                    Generate Number
                </button>
            </div>
        </div>
    );
};

export default RandomGenerator;
