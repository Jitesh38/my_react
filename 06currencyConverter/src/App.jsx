import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convAmt, setConAmt] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConAmt(amount);
    setAmount(convAmt);
  };

  const convert = () => {
    setConAmt(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,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')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={() => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => {setAmount(amount)}}
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
                amount={convAmt}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
