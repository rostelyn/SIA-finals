document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reserve-now').addEventListener('click', () => {
        window.location.href = '../order-list/index.html';
    });

    document.getElementById('view-reservations').addEventListener('click', () => {
        window.location.href = '../view-reservations/reservation.html'; 
    });
});