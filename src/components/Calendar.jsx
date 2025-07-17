import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isToday from 'dayjs/plugin/isToday';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

// Extend dayjs with plugins
dayjs.extend(weekday);
dayjs.extend(isToday);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const highlightedDates = {
    '2025-08-05': { artist: 'Liyu Zhang', concert: 'Moonlight Sonata', venue: 'Shanghai Arena' },
    '2025-08-14': { artist: 'Chen Wei', concert: 'Jade Echoes', venue: 'Beijing Grand Theatre' },
    '2025-08-23': { artist: 'Sun Mei', concert: 'Night Beats', venue: 'Guangzhou Open Hall' },
    '2025-07-20': { artist: 'Zhao Lin', concert: 'Dragon Rhapsody', venue: 'Chengdu Symphony Hall' },
    '2025-07-17': { artist: 'Mei Ling', concert: 'Whispers of Bamboo', venue: 'Hangzhou Concert Theater' },
    '2025-07-26': { artist: 'Tian Yu', concert: 'Fire & Ink', venue: 'Wuhan Arts Arena' }
  };

  const daysInMonth = currentMonth.daysInMonth();
  const startDay = currentMonth.startOf('month').weekday();

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
    setSelectedDate(null);
  };

  const renderDays = () => {
    const days = [];
    // Render empty divs for the days before the 1st of the month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-full h-14" />);
    }

    // Render days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = currentMonth.date(day);
      const dateStr = dateObj.format('YYYY-MM-DD');
      const isHighlighted = highlightedDates[dateStr];
      const isSelected = selectedDate && selectedDate.isSame(dateObj, 'day');
      const isPast = dateObj.isBefore(dayjs(), 'day');
      const isCurrentDay = dateObj.isToday();

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(dateObj)}
          className={`
            w-full h-14 flex items-center justify-center text-lg font-bold
            transition-all duration-150 ease-out
            ${isSelected ? 'bg-red-500 text-white' : ''}
            ${!isSelected && isHighlighted ? 'bg-white text-black border-2 border-red-500' : ''}
            ${!isSelected && !isHighlighted && isPast ? 'text-gray-500 cursor-not-allowed' : ''}
            ${!isSelected && !isHighlighted && !isPast && isCurrentDay ? 'bg-black text-white border-2 border-red-500' : ''}
            ${!isSelected && !isHighlighted && !isPast && !isCurrentDay ? 'text-black hover:bg-gray-100' : ''}
            ${isPast && isHighlighted ? 'opacity-50' : ''}
            focus:outline-none focus:ring-2 focus:ring-red-500
          `}
          disabled={isPast && !isHighlighted}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  const selectedDateStr = selectedDate ? selectedDate.format('YYYY-MM-DD') : null;
  const concert = selectedDateStr ? highlightedDates[selectedDateStr] : null;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-black text-white px-8 py-6">
        <h1 className="text-4xl font-black tracking-tight">CONCERT CALENDAR</h1>
        <p className="text-gray-300 mt-2 text-lg">Select a date to view event details</p>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-black p-8">
              {/* Calendar Header */}
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={handlePrevMonth}
                  className="w-12 h-12 flex items-center justify-center bg-black text-white hover:bg-red-500 transition-colors duration-150"
                  aria-label="Previous Month"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h2 className="text-3xl font-black uppercase tracking-wider">
                  {currentMonth.format('MMMM YYYY')}
                </h2>
                <button
                  onClick={handleNextMonth}
                  className="w-12 h-12 flex items-center justify-center bg-black text-white hover:bg-red-500 transition-colors duration-150"
                  aria-label="Next Month"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              {/* Weekdays */}
              <div className="grid grid-cols-7 mb-4">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <div key={day} className="h-12 flex items-center justify-center bg-gray-100 font-bold text-sm tracking-wider border-r border-gray-300 last:border-r-0">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 border-t border-l border-gray-300">
                {renderDays().map((day, index) => (
                  <div key={index} className="border-r border-b border-gray-300 last:border-r-0">
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500"></div>
                <span>SELECTED</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white border-2 border-red-500"></div>
                <span>EVENT AVAILABLE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-black"></div>
                <span>TODAY</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-black text-white p-8">
            <div className="h-full flex flex-col">
              <h2 className="text-2xl font-black mb-8 tracking-wider">EVENT DETAILS</h2>
              
              {selectedDate && (
                <div className="mb-6">
                  <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2">Selected Date</p>
                  <p className="text-2xl font-black">
                    {selectedDate.format('MMM DD, YYYY').toUpperCase()}
                  </p>
                </div>
              )}

              {concert ? (
                <div className="space-y-6 flex-grow">
                  <div>
                    <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2">Artist</p>
                    <p className="text-2xl font-black">{concert.artist.toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2">Concert</p>
                    <p className="text-xl font-bold">{concert.concert}</p>
                  </div>
                  <div>
                    <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2">Venue</p>
                    <p className="text-lg">{concert.venue}</p>
                  </div>
                </div>
              ) : (
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-gray-400 text-center text-lg">
                    {selectedDate ? "NO EVENT SCHEDULED" : "SELECT A DATE TO VIEW DETAILS"}
                  </p>
                </div>
              )}

              <div className="mt-8">
               <a href='/ticketing'>
                <button
                  className={`w-full py-4 font-black text-lg tracking-wider transition-all duration-150
                    
                    ${concert 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    }
                  `}
                  disabled={!concert}
                  onClick={() => {
                    if (concert) {
                      // Handle booking logic here
                      console.log('Booking for:', concert);
                    }
                  }}
                >
                  {concert ? 'BOOK NOW' : 'SELECT A DATE'}
                </button>
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;