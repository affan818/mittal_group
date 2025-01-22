// Initialize EmailJS with your Public Key
emailjs.init("Z3QCDlRwWemByA96I");

// Handle form submission
document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

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
    //   alert(
    //     "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9."
    //   );
    //   return;
    // }

    // Send form data via EmailJS
    emailjs
      .sendForm("service_ge6mdxg", "template_g9f6jhn", this)
      .then(() => {
        document.querySelector(".thankyou").innerHTML =
          "<span style='font-size:30px'>Thankyou 😊</span>";
        this.reset(); // Reset the form
      })
      .catch((error) => {
        alert("Something went wrong. Please try after some time.");
      });
  });
