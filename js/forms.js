// Form handling
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload on submit

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Form validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate sending the form (replace with actual server logic if needed)
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset(); // Clear the form
});
