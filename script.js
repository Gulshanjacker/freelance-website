
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById("openForm").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none";
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(function() {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. " + error);
        });
});
