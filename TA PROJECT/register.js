function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorDiv = document.getElementById("error");

    const errors = [];

    // register.js

// register.js

async function registerUser() {
  // Get user input
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const dob = document.getElementById("date").value;
  const phone = document.getElementById("phone").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");
  const data = {
    first: first,
    last: last,
    dob: dob,
    phone: phone,
    username: username,
    password: password
  };

  try {
    const response = await fetch('http://localhost:3000/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.status === 400) {
      const errorMessage = await response.text(); // Get the error message from the response
      errorDiv.innerText = errorMessage; // Display the error message
    } else {
      console.log('Registration successful');
      window.location.href = 'login_index.html';
      // Proceed with any other logic for successful registration
      // For example, redirect to a login page
      // window.location.href = 'login_index.html';
    }
  } catch (error) {
    console.error('There was a problem with the registration:', error);
    // Handle other network errors
    errorDiv.innerText = 'There was a problem with the registration. Please try again later.';
  }
}




    if (!username.trim()) {
      errors.push("Username is required.");
    }
    if (!password.trim()) {
      errors.push("Password is required.");
    } else {
      if (password.length < 8 || password.length > 15) {
        errors.push("Password must be between 8 and 15 characters long.");
      }
      if (!/\d/.test(password)) {
        errors.push("Password must contain at least one digit.");
      }
      if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
      }
      if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
      }
      if (!/[!@#$%&*()-+=^]/.test(password)) {
        errors.push("Password must contain at least one special character.");
      }
      if (/\s/.test(password)) {
        errors.push("Password cannot contain whitespace.");
      }
      // Call the function to register a user

    }

    if (errors.length > 0) {
      errorDiv.innerText = errors.join("\n");
    } else {
      errorDiv.innerText = ""; // Clear previous error messages
      // Proceed with login/register logic
      // For demo purpose, we'll just log the successful validation
      console.log("Validation successful. Proceed with login/register logic.");
      registerUser();
      // window.location.href = 'login_index.html';
    }
  }


  