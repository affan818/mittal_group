// Initialize EmailJS with your Public Key
emailjs.init("Z3QCDlRwWemByA96I");

document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Basic form validation
    if (!name || !email || !phone) {
      alert("All fields are required. Please fill them out.");
      return;
    }

    // Validate phone number pattern
    // const phonePattern = /^[6-9][0-9]{9}$/;
    // if (!phonePattern.test(phone)) {
    //   return;
    // }

    // Email parameters
    const emailParams = {
      user_name: name, // User's name
      user_email: email, // User's email (recipient for confirmation email)
      user_phone: phone, // Optional: User's phone (if needed in the email)
    };

    // Send email using EmailJS
    emailjs
      .send("service_ge6mdxg", "template_nncroal", emailParams)
      .then(function (response) {
        alert("Check your email we sent you a confirmation!");
        document.getElementById("appointmentForm").reset(); // Reset the form after successful email
      });
  });
