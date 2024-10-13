function loadSummary() {
    const summaryDiv = document.getElementById('summary');

    // Retrieve the stored options from sessionStorage
    const eventType = sessionStorage.getItem('eventType');
    const venue = sessionStorage.getItem('venue');
    const catering = sessionStorage.getItem('catering');
    const date = sessionStorage.getItem('date');

    // Ensure all selections are present before displaying
    if (eventType || venue || catering || date) {
        if (eventType) summaryDiv.appendChild(createSummaryItem('Event Type', eventType));
        if (venue) summaryDiv.appendChild(createSummaryItem('Venue', venue));
        if (catering) summaryDiv.appendChild(createSummaryItem('Catering', catering));
        if (date) summaryDiv.appendChild(createSummaryItem('Date', date));
    } else {
        summaryDiv.innerHTML = '<p>No booking details found. Please complete your booking first.</p>';
    }
}

function createSummaryItem(label, value) {
    const div = document.createElement('div');
    div.className = 'summary-item';
    const h2 = document.createElement('h2');
    h2.textContent = label;
    const p = document.createElement('p');
    p.textContent = value;

    div.appendChild(h2);
    div.appendChild(p);

    return div;
}

window.onload = loadSummary;
