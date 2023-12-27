document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // If the submission is successful, you can show a message to the user
            alert('Thank you for your message!');
            this.reset(); // Reset the form fields
        } else {
            // If there is an error, you can handle it here
            response.json().then(data => {
                if (Object.hasOwnProperty.call(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert("Oops! There was a problem submitting your form");
                }
            });
        }
    }).catch(error => {
        // Handle network errors
        alert('Error sending message. Please try again later.');
    });
});
