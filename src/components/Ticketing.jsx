import React, { useState, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Main Ticketing Component
const Ticketing = () => {
  const TICKET_PRICE = 10;
  
  // New theater layout configuration
  // Each number represents the number of seats in that row, starting from the front.
  const rowConfig = [12, 14, 14, 16, 16, 18, 18, 20, 20, 22];
  const TOTAL_SEATS = rowConfig.reduce((sum, count) => sum + count, 0);

  // Pre-define some occupied seats for demonstration
  const initialOccupiedSeats = useMemo(() => {
    const occupied = new Set();
    while (occupied.size < 25) {
      occupied.add(Math.floor(Math.random() * TOTAL_SEATS));
    }
    return occupied;
  }, [TOTAL_SEATS]);

  // State to manage all seats (still a flat array for easier state management)
  const [seats, setSeats] = useState(
    Array.from({ length: TOTAL_SEATS }, (_, index) => ({
      id: index,
      isOccupied: initialOccupiedSeats.has(index),
      isSelected: false,
    }))
  );

  // Handler for selecting a seat (no changes needed here)
  const handleSeatClick = (seatId) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) => {
        if (seat.id === seatId && !seat.isOccupied) {
          return { ...seat, isSelected: !seat.isSelected };
        }
        return seat;
      })
    );
  };

  // Memoized calculation for selected seats and total price
  const { selectedSeatsCount, totalPrice } = useMemo(() => {
    const selected = seats.filter((seat) => seat.isSelected);
    const count = selected.length;
    const price = count * TICKET_PRICE;
    return { selectedSeatsCount: count, totalPrice: price };
  }, [seats]);
  
  // Seat Component
  const Seat = ({ seatData, onClick }) => {
    const { isOccupied, isSelected } = seatData;
    
    const seatClass = isOccupied
      ? 'bg-white cursor-not-allowed'
      : isSelected
      ? 'bg-red-600 hover:bg-red-700'
      : 'bg-gray-700 hover:bg-gray-500';

    return (
      <div
        className={`w-5 h-5 md:w-6 md:h-6 m-1 rounded-md transition-colors duration-200 ${seatClass}`}
        onClick={() => onClick(seatData.id)}
      />
    );
  };

  // Legend Item Component
  const LegendItem = ({ color, text }) => (
    <div className="flex items-center space-x-2">
      <div className={`w-5 h-5 rounded-md ${color}`}></div>
      <span className="text-gray-400 text-sm">{text}</span>
    </div>
  );

  // Function to render seats in their configured rows
  const renderSeats = () => {
    let seatIndex = 0;
    return rowConfig.map((seatCount, rowIndex) => (
        <div key={rowIndex} className="flex justify-center my-1">
            {Array.from({ length: seatCount }).map(() => {
                const seat = seats[seatIndex];
                seatIndex++;
                return <Seat key={seat.id} seatData={seat} onClick={handleSeatClick} />;
            })}
        </div>
    ));
  };


  return (
    <div className="bg-gray-800 min-h-screen flex flex-col font-sans text-white">
        <Navbar/>
        
        {/* Main content area that grows to push footer down */}
        <main className="flex-grow flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-5xl">
                {/* Screen Display */}
                <div className="relative w-full h-16 mb-8">
                    <div className="absolute inset-x-0 top-0 h-16 bg-white rounded-t-full opacity-20 filter blur-xl"></div>
                    <div className="w-3/4 h-2 mx-auto bg-white rounded-b-lg shadow-lg shadow-white"></div>
                    <p className="text-center text-xl font-bold mt-2 tracking-widest">STAGE</p>
                </div>

                {/* Seat Matrix */}
                <div className="flex flex-col items-center">
                    {renderSeats()}
                </div>

                {/* Legend */}
                <div className="flex justify-center items-center space-x-6 mt-8 p-4 bg-gray-900/50 rounded-lg">
                    <LegendItem color="bg-gray-700" text="Vacant" />
                    <LegendItem color="bg-red-600" text="Selected" />
                    <LegendItem color="bg-white" text="Occupied" />
                </div>

                {/* Checkout Summary */}
                <div className="mt-8 text-center">
                {selectedSeatsCount > 0 ? (
                    <>
                    <p className="text-lg">
                        You have selected <span className="font-bold text-red-500">{selectedSeatsCount}</span> seat{selectedSeatsCount > 1 ? 's' : ''}.
                    </p>
                    <p className="text-2xl font-bold mt-2">
                        Total Price: <span className="text-red-500">${totalPrice}</span>
                    </p>
                    <button className="mt-6 bg-red-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg shadow-red-600/30">
                        Proceed to Checkout
                    </button>
                    </>
                ) : (
                    <p className="text-lg text-gray-400">Please select a seat to continue.</p>
                )}
                </div>
            </div>
        </main>
        {/* <div className='h-[20vh] w-screen bg-white'></div>
        <Footer/> */}
    </div>
  );
};

export default Ticketing;
