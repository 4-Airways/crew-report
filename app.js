// Initialize EmailJS with your user ID
(function() {
    emailjs.init("60ceMPLJm0V-zSb0q"); // Replace with your actual EmailJS user ID
})();

// Handle the form submission
document.getElementById("crewReportForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Send the form data using EmailJS
    emailjs.sendForm("service_werouob", "template_vahlcph", this)
        .then(function() {
            // Success callback
            alert('Report submitted successfully!');
            document.getElementById("crewReportForm").reset(); // Optional: reset the form after submission
        }, function(error) {
            // Error callback
            alert('Failed to submit report: ' + JSON.stringify(error));
        });
});
