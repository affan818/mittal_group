// Initialize EmailJS with your Public Key
emailjs.init("Z3QCDlRwWemByA96I");

let pdfUrl = ""; // Store the selected PDF URL

// Capture PDF URL from button click
document.querySelectorAll('[data-bs-toggle="modal"]').forEach((button) => {
  button.addEventListener("click", function () {
    pdfUrl = this.getAttribute("data-pdf"); // Store the PDF URL
  });
});

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

    // Email parameters
    const emailParams = {
      user_name: name, // User's name
      user_email: email, // User's email (recipient for confirmation email)
      user_mobile: phone, // User's phone
    };

    // Send email using EmailJS
    emailjs
      .send("service_ge6mdxg", "template_nncroal", emailParams)
      .then(function (response) {
        console.log("✅ Email sent:", response);

        // Show success message
        alert("Check your email, we sent you a confirmation!");

        // Reset the form
        document.getElementById("appointmentForm").reset();

        // ✅ Redirect to the PDF if URL is available
        if (pdfUrl) {
          window.location.href = pdfUrl; // Redirect to the PDF
        } else {
          console.warn("No brochure selected.");
        }
      })
      .catch(function (error) {
        console.error("❌ Email sending failed:", error);
        alert("Failed to send email. Please try again.");
      });
  });
