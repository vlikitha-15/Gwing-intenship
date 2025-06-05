document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function(response) {
      alert('Message sent successfully!');
    }, function(error) {
      alert('Failed to send the message. Please try again.');
    });

  this.reset();
});
