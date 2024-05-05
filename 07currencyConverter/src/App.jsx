import { useState } from "react";
import "./App.css";
import { InputBox } from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    // const tempFrom = to;
    // const tempTo = from;
    // const tempAmount = convertedAmount;
    // const tempConvertedAmount = amount;

    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="flex flex-wrap items-center justify-center w-full h-screen mx-auto bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fblack-background&psig=AOvVaw0wgq2jPifMJ6iJ-pCdYVRL&ust=1714882861496000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDV3s-S84UDFQAAAAAdAAAAABAE')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
                label="From" 
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=> setFrom(currency)}  
                selectCurrency= {from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
                label="To" 
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=> setTo(currency)}  
                selectCurrency= {to}  
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
