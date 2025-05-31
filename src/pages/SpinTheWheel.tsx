import { useState } from 'react';

const SpinTheWheel = () => {
  const [options] = useState([
    "Pizza Night",
    "Movie Marathon", 
    "Game Night",
    "Cook Together",
    "Go for a Walk",
    "Read a Book",
    "Listen to Music",
    "Call a Friend"
  ]);
  
  const [selectedOption, setSelectedOption] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);

  const spinWheel = () => {
    setIsSpinning(true);
    setHasSpun(false);
    setSelectedOption("");
    
    // Simulate spinning delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * options.length);
      setSelectedOption(options[randomIndex]);
      setIsSpinning(false);
      setHasSpun(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          🎰 Spin The Wheel!
        </h1>
        
        {/* Wheel Visual */}
        <div className="relative mb-8">
          <div 
            className={`w-48 h-48 mx-auto rounded-full border-8 border-gray-300 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg transition-transform duration-2000 ease-out ${
              isSpinning ? 'animate-spin' : ''
            }`}
          >
            <div className="text-white text-4xl font-bold">
              {isSpinning ? '🎲' : '🎯'}
            </div>
          </div>
          
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500"></div>
          </div>
        </div>

        {/* Result Display */}
        <div className="mb-8 h-16 flex items-center justify-center">
          {isSpinning && (
            <div className="text-lg text-gray-600 animate-pulse">
              Spinning... 🌀
            </div>
          )}
          
          {hasSpun && selectedOption && (
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">You got:</div>
              <div className="text-2xl font-bold text-purple-600 bg-purple-100 px-4 py-2 rounded-lg animate-bounce">
                {selectedOption}
              </div>
            </div>
          )}
          
          {!isSpinning && !hasSpun && (
            <div className="text-gray-500">
              Click the button to spin! 🎲
            </div>
          )}
        </div>

        {/* Spin Button */}
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className={`px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg transform transition-all duration-200 ${
            isSpinning 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 active:scale-95'
          }`}
        >
          {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
        </button>

        {/* Options List */}
        <div className="mt-8 text-left">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Available Options:</h3>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
            {options.map((option, index) => (
              <div key={index} className="bg-gray-100 px-2 py-1 rounded text-center">
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinTheWheel;