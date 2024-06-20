document.addEventListener('DOMContentLoaded', function() {
    // Retrieve reservations from localStorage
    let reservations = JSON.parse(localStorage.getItem('reservations')) || [];

    // Function to display reservations
    function displayReservations() {
        const reservationsList = document.getElementById('reservations-list');
        reservationsList.innerHTML = ''; // Clear previous reservations

        // Loop through reservations and create HTML elements to display them
        reservations.forEach(function(reservation, index) {
            // Create elements
            const reservationItem = document.createElement('div');
            reservationItem.classList.add('reservation-item');
            reservationItem.innerHTML = `
                <p><strong>Name:</strong> ${reservation.name}</p>
                <p><strong>Section:</strong> ${reservation.section}</p>
                <p><strong>School ID:</strong> ${reservation.schoolId}</p>
            `;
            reservationsList.appendChild(reservationItem);
        });
    }

    // Display reservations on page load
    displayReservations();

    // Add event listener for clear reservations button
    document.getElementById('clear-reservations').addEventListener('click', function() {
        // Clear reservations in localStorage
        localStorage.removeItem('reservations');
        
        // Clear displayed reservations on the page
        const reservationsList = document.getElementById('reservations-list');
        reservationsList.innerHTML = '<p>No reservations available.</p>';
    });

    // Add event listener to back to home screen button
    document.getElementById('back-home').addEventListener('click', function() {
        window.location.href = '../front/index.html'; // Adjust path if necessary
    });
});
