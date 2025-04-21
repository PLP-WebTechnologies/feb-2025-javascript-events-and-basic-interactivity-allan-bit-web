// Event listener to handle form submission and validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Reset error messages
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
  
    // Validate form fields
    let isValid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (name === "") {
      document.getElementById("nameError").style.display = "inline";
      isValid = false;
    }
  
    if (!validateEmail(email)) {
      document.getElementById("emailError").style.display = "inline";
      isValid = false;
    }
  
    // If valid, show a success message
    if (isValid) {
      document.getElementById("formMessage").textContent = "Form submitted successfully!";
      document.getElementById("formMessage").style.color = "green";
    } else {
      document.getElementById("formMessage").textContent = "Please fix the errors above.";
      document.getElementById("formMessage").style.color = "red";
    }
  });
  
  // Email validation function
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
  
  // Event listener for color box button
  document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colorBox = document.getElementById("colorBox");
    const colors = ["lightblue", "lightgreen", "lightcoral", "lightsalmon"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
  });
  
  // Event listener to toggle visibility of text
  document.getElementById("toggleVisibilityBtn").addEventListener("click", function() {
    const toggleText = document.getElementById("toggleText");
    if (toggleText.style.display === "none" || toggleText.style.display === "") {
      toggleText.style.display = "block";
    } else {
      toggleText.style.display = "none";
    }
  });
  