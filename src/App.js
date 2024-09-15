import { useState } from 'react';
import './App.css';
import Counterstep from './components/Counterstep.jsx';

function App() {
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setStep(step + 1);
    };

    const decrementHandler = () => {
        setStep(step - 1); // Corrected this line to decrement the step
    };

    const countIncrementHandler = () => {
        setCount(count +  step); // Modified to include the step in the calculation
    };

    return (
        <div>
            <Counterstep 
                step={step} 
                count={count} 
                countIncrementHandler={countIncrementHandler} 
                incrementHandler={incrementHandler} 
                decrementHandler={decrementHandler} 
            />
        </div>
    );
}

export default App;
