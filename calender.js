const calendarBody = document.getElementById('calendarBody');
const monthYearDisplay = document.getElementById('monthYear');
const proceedButton = document.getElementById('proceedButton');
let currentDate = new Date();
let bookedDates = new Set();

function generateCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  monthYearDisplay.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

  // Get the first day of the month and number of days in the month
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Clear previous cells
  calendarBody.innerHTML = '';

  let dateNumber = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if (i === 0 && j < firstDay) {
        cell.textContent = '';
      } else if (dateNumber > daysInMonth) {
        cell.textContent = '';
      } else {
        cell.textContent = dateNumber;
        cell.classList.add('date-cell');

        // Create a closure for each date
        (function() {
          const cellDate = new Date(year, month, dateNumber);
          const formattedDate = cellDate.toISOString().split('T')[0];

          // Check if the date is booked
          if (bookedDates.has(formattedDate)) {
            cell.classList.add('booked');
          }

          // Add click event to book the date
          cell.addEventListener('click', () => {
            if (bookedDates.has(formattedDate)) {
              bookedDates.delete(formattedDate);
              cell.classList.remove('booked');
            } else {
              bookedDates.add(formattedDate);
              cell.classList.add('booked');
            }
          });
        })();

        dateNumber++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

document.getElementById('prevMonth').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar(currentDate);
});

document.getElementById('nextMonth').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar(currentDate);
});

document.getElementById('prevYear').addEventListener('click', () => {
  currentDate.setFullYear(currentDate.getFullYear() - 1);
  generateCalendar(currentDate);
});

document.getElementById('nextYear').addEventListener('click', () => {
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  generateCalendar(currentDate);
});

proceedButton.addEventListener('click', () => {
  if (bookedDates.size > 0) {
    // Proceed with booking for the selected dates
    window.location.href = "menu_card.html"; // Replace "menu_card.html" with your target file
  } else {
    // No dates selected, do nothing or add additional logic if necessary
  }
});




// Initial generation
generateCalendar(currentDate);
