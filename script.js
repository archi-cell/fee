document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const eventType = document.getElementById('eventType').value;
    const specificEvent = document.getElementById('event').value;
    const venue = document.getElementById('venue').value;
    const eventDate = document.getElementById('date').value;
    const userName = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const ticketQuantity = document.getElementById('ticketQuantity').value;

    // Enhanced confirmation message
    const confirmationMessage = `
        <strong>Thank you, ${userName}!</strong><br>
        You have successfully booked <strong>${ticketQuantity}</strong> ticket(s) for <strong>${specificEvent}</strong>
        (${eventType}) at <strong>${venue}</strong> on <strong>${eventDate}</strong>.
        A confirmation email will be sent to <strong>${userEmail}</strong>.
    `;

    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;
    document.getElementById('confirmation').classList.remove('hidden');

    // Smooth scroll to confirmation message
    document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' });
});
