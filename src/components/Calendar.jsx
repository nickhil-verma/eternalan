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
  // const today = dayjs(); // Not directly used in render, can be removed or used for specific styling if needed

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
      days.push(<div key={`empty-${i}`} className="w-full h-12" />);
    }

    // Render days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = currentMonth.date(day);
      const dateStr = dateObj.format('YYYY-MM-DD');
      const isHighlighted = highlightedDates[dateStr];
      const isSelected = selectedDate && selectedDate.isSame(dateObj, 'day');
      const isPast = dateObj.isBefore(dayjs(), 'day'); // Check if date is in the past
      const isCurrentDay = dateObj.isToday();

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(dateObj)}
          className={`
            w-full h-12 flex items-center justify-center rounded-lg text-lg font-medium
            transition-all duration-200 ease-in-out transform
            ${isSelected ? 'bg-red-600 text-white shadow-lg scale-105' : ''}
            ${!isSelected && isHighlighted ? 'bg-yellow-400 text-gray-900 shadow-md' : ''}
            ${!isSelected && !isHighlighted && isPast ? 'text-gray-500 cursor-not-allowed opacity-60' : ''}
            ${!isSelected && !isHighlighted && !isPast && isCurrentDay ? 'border-2 border-red-500 text-red-500' : ''}
            ${!isSelected && !isHighlighted && !isPast && !isCurrentDay ? 'text-white hover:bg-white/20 hover:scale-105' : ''}
            ${isPast && isHighlighted ? 'opacity-70' : ''} /* Soften highlighted past dates */
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
          `}
          disabled={isPast && !isHighlighted} // Disable interaction for non-highlighted past dates
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
    <div className="min-h-screen  text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Calendar Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Previous Month"
            >
              <ArrowLeft className="text-white w-6 h-6" />
            </button>
            <h2 className="text-3xl font-extrabold text-white tracking-wide">
              {currentMonth.format('MMMM YYYY')}
            </h2>
            <button
              onClick={handleNextMonth}
              className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Next Month"
            >
              <ArrowRight className="text-white w-6 h-6" />
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center text-sm sm:text-base font-semibold text-gray-300 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="py-2">{day}</div>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 gap-2 flex-grow">
            {renderDays()}
          </div>
        </div>

        {/* Details Section */}
        <div className="text-white bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl flex flex-col justify-between min-h-[250px] md:min-h-full">
          <div>
            <h2 className="text-3xl font-extrabold mb-5 text-red-400">Event Details</h2>
            {selectedDate && (
              <p className="text-xl font-semibold mb-4">
                Selected Date: {selectedDate.format('MMM DD, YYYY')}
              </p>
            )}

            {concert ? (
              <div className="space-y-3">
                <p className="text-2xl font-bold flex items-center">
                  <span className="mr-2 text-red-400">🎤</span> {concert.artist}
                </p>
                <p className="text-xl flex items-center">
                  <span className="mr-2 text-red-400">🎶</span> {concert.concert}
                </p>
                <p className="text-lg text-gray-300 flex items-center">
                  <span className="mr-2 text-red-400">📍</span> {concert.venue}
                </p>
              </div>
            ) : (
              <p className="text-lg text-gray-400">
                {selectedDate ? "No event scheduled for this date." : "Please select a date to view event details."}
              </p>
            )}
          </div>

          <a
            href="/ticketing"
            className={`mt-8 inline-block text-center py-3 px-6 rounded-full text-lg font-bold
              transition-all duration-300 ease-in-out transform
              ${concert ? 'bg-red-500 hover:bg-red-600 shadow-lg hover:scale-105' : 'bg-gray-700 cursor-not-allowed opacity-70'}
            `}
            style={{ width: 'fit-content' }} // Ensures button width fits content
            onClick={(e) => {
                if (!concert) {
                    e.preventDefault(); // Prevent navigation if no concert is selected
                }
            }}
          >
            {concert ? 'Book Now' : 'Select a Date'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Calendar;