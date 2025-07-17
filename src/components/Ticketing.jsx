import React, { useState, useMemo } from 'react';

// Main Ticketing Component
const Ticketing = () => {
  const TICKET_PRICE = 10;
  
  // Theater layout configuration
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

  // State to manage all seats
  const [seats, setSeats] = useState(
    Array.from({ length: TOTAL_SEATS }, (_, index) => ({
      id: index,
      isOccupied: initialOccupiedSeats.has(index),
      isSelected: false,
    }))
  );

  // Handler for selecting a seat
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
      ? 'bg-red-900 cursor-not-allowed border-black/40'
      : isSelected
      ? 'bg-white border-white shadow-lg shadow-white/20'
      : 'bg-transparent border-white/30 hover:border-white/60 hover:bg-white/10';

    return (
      <div
        className={`w-6 h-6 md:w-8 md:h-8 m-1 rounded-sm border-2 transition-all duration-300 cursor-pointer ${seatClass} backdrop-blur-sm`}
        onClick={() => onClick(seatData.id)}
      />
    );
  };

  // Legend Item Component
  const LegendItem = ({ bgColor, borderColor, text }) => (
    <div className="flex items-center space-x-3">
      <div className={`w-6 h-6 rounded-sm border-2 ${bgColor} ${borderColor} backdrop-blur-sm`}></div>
      <span className="text-white/80 text-sm font-medium tracking-wide">{text}</span>
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
    <div className="bg-black min-h-screen flex flex-col font-mono text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,white/5,transparent)] animate-pulse"></div>
        </div>
        
        {/* Main content area */}
        <main className="flex-grow flex flex-col items-center justify-center p-8 relative z-10">
            <div className="w-full max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        SELECT SEATS
                    </h1>
                    <div className="w-24 h-0.5 bg-white mx-auto"></div>
                </div>

                {/* Screen Display */}
                <div className="relative w-full mb-16">
                    <div className="w-full max-w-4xl mx-auto h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full shadow-lg shadow-white/20"></div>
                    <div className="w-3/4 h-0.5 mx-auto bg-white/60 rounded-full mt-2"></div>
                    <p className="text-center text-lg font-bold mt-6 tracking-[0.5em] text-white/80">STAGE</p>
                </div>

                {/* Seat Matrix */}
                <div className="flex flex-col items-center mb-16 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    {renderSeats()}
                </div>

                {/* Legend */}
                <div className="flex justify-center items-center space-x-12 mb-12 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                    <LegendItem 
                        bgColor="bg-transparent" 
                        borderColor="border-white/30" 
                        text="AVAILABLE" 
                    />
                    <LegendItem 
                        bgColor="bg-white" 
                        borderColor="border-white" 
                        text="SELECTED" 
                    />
                    <LegendItem 
                        bgColor="bg-red-900" 
                        borderColor="border-black/40" 
                        text="OCCUPIED" 
                    />
                </div>

                {/* Checkout Summary */}
                <div className="text-center">
                {selectedSeatsCount > 0 ? (
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <p className="text-xl mb-4 text-white/90">
                            <span className="font-bold text-white">{selectedSeatsCount}</span> seat{selectedSeatsCount > 1 ? 's' : ''} selected
                        </p>
                        <p className="text-3xl font-bold mb-8 tracking-wide">
                            <span className="text-white">${totalPrice}</span>
                        </p>
                        <button className="bg-white text-black font-bold py-4 px-12 rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/20 tracking-wide uppercase">
                            Proceed to Checkout
                        </button>
                    </div>
                ) : (
                    <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <p className="text-xl text-white/60 tracking-wide">Select seats to continue</p>
                    </div>
                )}
                </div>
            </div>
        </main>
        
        {/* Footer line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};

export default Ticketing;