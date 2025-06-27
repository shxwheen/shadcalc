
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface HistoryEntry {
  expression: string;
  result: string;
  timestamp: Date;
}

export function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleButtonClick = (value: string) => {
    if (displayValue === "0") {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleClear = () => {
    setDisplayValue("0");
  };

  const safeCalculate = (expression: string): number => {
    // Simple recursive descent parser for basic math operations
    const tokens = expression.replace(/\s/g, '').split(/([+\-*/()])/);
    let index = 0;

    const parseExpression = (): number => {
      let result = parseTerm();
      while (index < tokens.length && (tokens[index] === '+' || tokens[index] === '-')) {
        const operator = tokens[index++];
        const term = parseTerm();
        result = operator === '+' ? result + term : result - term;
      }
      return result;
    };

    const parseTerm = (): number => {
      let result = parseFactor();
      while (index < tokens.length && (tokens[index] === '*' || tokens[index] === '/')) {
        const operator = tokens[index++];
        const factor = parseFactor();
        result = operator === '*' ? result * factor : result / factor;
      }
      return result;
    };

    const parseFactor = (): number => {
      if (tokens[index] === '(') {
        index++; // Skip '('
        const result = parseExpression();
        index++; // Skip ')'
        return result;
      }
      return parseFloat(tokens[index++]);
    };

    return parseExpression();
  };

  const handleCalculate = () => {
    try {
      const result = safeCalculate(displayValue);
      if (isNaN(result) || !isFinite(result)) {
        setDisplayValue("Error");
      } else {
        const resultString = result.toString();
        // Add to history if it's a valid calculation
        if (displayValue !== "0" && displayValue !== "Error") {
          const newEntry: HistoryEntry = {
            expression: displayValue,
            result: resultString,
            timestamp: new Date()
          };
          setHistory(prev => [newEntry, ...prev.slice(0, 19)]); // Keep last 20 entries
        }
        setDisplayValue(resultString);
      }
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const selectHistoryItem = (entry: HistoryEntry) => {
    setDisplayValue(entry.result);
    setShowHistory(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-neutral-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Calculator */}
      <div className="w-full max-w-sm mx-auto bg-gray-900 rounded-3xl shadow-2xl p-6 border border-gray-700 relative z-10">
        {/* History Toggle Button */}
        <div className="absolute -top-2 -right-2">
          <Button
            onClick={() => setShowHistory(!showHistory)}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center"
          >
            📚
          </Button>
        </div>

        {/* Display */}
        <div className="mb-6">
          <Input
            type="text"
            className="w-full h-20 text-5xl text-right bg-gray-800 border-gray-600 text-white font-mono rounded-2xl px-4 shadow-inner"
            value={displayValue}
            readOnly
          />
        </div>
        
        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 - Clear and operators */}
          <Button 
            onClick={handleClear} 
            className="col-span-2 bg-red-600 hover:bg-red-700 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            Clear
          </Button>
          <Button 
            onClick={() => handleButtonClick("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            ÷
          </Button>
          <Button 
            onClick={() => handleButtonClick("*")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            ×
          </Button>

          {/* Row 2 - Numbers 7,8,9 and minus */}
          <Button 
            onClick={() => handleButtonClick("7")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            7
          </Button>
          <Button 
            onClick={() => handleButtonClick("8")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            8
          </Button>
          <Button 
            onClick={() => handleButtonClick("9")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            9
          </Button>
          <Button 
            onClick={() => handleButtonClick("-")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            −
          </Button>

          {/* Row 3 - Numbers 4,5,6 and plus */}
          <Button 
            onClick={() => handleButtonClick("4")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            4
          </Button>
          <Button 
            onClick={() => handleButtonClick("5")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            5
          </Button>
          <Button 
            onClick={() => handleButtonClick("6")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            6
          </Button>
          <Button 
            onClick={() => handleButtonClick("+")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            +
          </Button>

          {/* Row 4 - Numbers 1,2,3 and equals */}
          <Button 
            onClick={() => handleButtonClick("1")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            1
          </Button>
          <Button 
            onClick={() => handleButtonClick("2")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            2
          </Button>
          <Button 
            onClick={() => handleButtonClick("3")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            3
          </Button>
          <Button 
            onClick={handleCalculate}
            className="row-span-2 bg-green-600 hover:bg-green-700 text-white font-bold text-2xl rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            =
          </Button>

          {/* Row 5 - Zero and decimal point */}
          <Button 
            onClick={() => handleButtonClick("0")}
            className="col-span-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            0
          </Button>
          <Button 
            onClick={() => handleButtonClick(".")}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold h-14 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
          >
            .
          </Button>
        </div>
      </div>

      {/* History Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gray-800 border-l border-gray-600 shadow-2xl transform transition-transform duration-300 ease-in-out z-20 ${
        showHistory ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">History</h2>
            <div className="flex gap-2">
              <Button
                onClick={clearHistory}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-sm rounded-lg"
              >
                Clear
              </Button>
              <Button
                onClick={() => setShowHistory(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 text-sm rounded-lg"
              >
                ✕
              </Button>
            </div>
          </div>

          {/* History List */}
          <div className="flex-1 overflow-y-auto">
            {history.length === 0 ? (
              <div className="text-gray-400 text-center mt-10">
                <div className="text-4xl mb-4">🧮</div>
                <p>No calculations yet</p>
                <p className="text-sm mt-2">Your calculation history will appear here</p>
              </div>
            ) : (
              <div className="space-y-3">
                {history.map((entry, index) => (
                  <div
                    key={index}
                    onClick={() => selectHistoryItem(entry)}
                    className="bg-gray-700 rounded-xl p-4 cursor-pointer hover:bg-gray-600 transition-colors duration-200 border border-gray-600"
                  >
                    <div className="text-gray-300 text-sm font-mono mb-1">
                      {entry.expression}
                    </div>
                    <div className="text-white text-lg font-mono font-bold mb-2">
                      = {entry.result}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {entry.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showHistory && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-15"
          onClick={() => setShowHistory(false)}
        />
      )}
    </div>
  );
}
