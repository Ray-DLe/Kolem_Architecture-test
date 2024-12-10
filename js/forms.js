<form action="https://example.com/submit" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send</button>
</form>

<script>
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

    // Create form data object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Use Fetch API to submit form data
    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => response.json()) // Assuming the server responds with JSON
    .then(data => {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset(); // Clear the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    });
});
</script>

