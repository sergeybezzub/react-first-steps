import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prevstate) => prevstate + 1);
    };
    const decrement = () => {
        setCount((prevstate) => prevstate - 1);
        setCount((prevstate) => prevstate - 1);
        setCount((prevstate) => prevstate - 1);
        setCount((prevstate) => prevstate - 1);
        setCount((prevstate) => prevstate - 1);
    };

    return <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>;
    
};

export default CounterComponent;