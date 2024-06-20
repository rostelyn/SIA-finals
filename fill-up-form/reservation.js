document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for form submission
    document.getElementById('reservation-details').addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const section = document.getElementById('section').value;
        const schoolId = document.getElementById('school-id').value;

        // Create a reservation object
        const reservation = {
            name: name,
            section: section,
            schoolId: schoolId
        };

        // Check if there are existing reservations in localStorage
        let reservations = JSON.parse(localStorage.getItem('reservations')) || [];

        // Add the new reservation to the array
        reservations.push(reservation);

        // Save the updated reservations array back to localStorage
        localStorage.setItem('reservations', JSON.stringify(reservations));

        // Display confirmation message
        const confirmationSection = document.getElementById('confirmation');
        confirmationSection.style.display = 'block';
        confirmationSection.innerHTML = `
            <p>Reservation Successful! <span class="check-mark">&#10004;</span></p>
        `;

        // Clear form fields immediately
        document.getElementById('name').value = '';
        document.getElementById('section').value = '';
        document.getElementById('school-id').value = '';

        // Hide confirmation after a short delay (2 seconds in this example)
        setTimeout(function() {
            confirmationSection.style.display = 'none';
        }, 2000); // Adjust the delay (in milliseconds) as needed
    });

    // Add event listener for back to home screen button
    document.getElementById('back-home').addEventListener('click', function() {
        window.location.href = '../front/index.html'; // Adjust path if necessary
    });
});
