document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple alert for reservation form submission
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission for this demo
            alert('Thank you for your reservation request! We will contact you shortly.');
            reservationForm.reset(); // Clear the form
        });
    }

    // You can add more interactive elements here, e.g., image sliders, dynamic menu loading, etc.
});