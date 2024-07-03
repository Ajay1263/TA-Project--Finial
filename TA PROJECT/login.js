async function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorDiv = document.getElementById("error");

    errorDiv.innerText = '';

    try {
        const response = await fetch('http://localhost:3000/credentials');
        const credentials = await response.json();

        // Find the user with the entered username
        const user = credentials.find(user => user.username === username);

        // Check if the username exists
        if (!user) {
            console.log('Username not found. Please register first.');
            errorDiv.innerText = "Username/Password is Wrong";
            return;
        }

        // Check if the entered password matches the stored password
        if (password === user.password) {
            console.log('Login successful!');
            // Save first name, last name, and username in local storage
            localStorage.setItem('firstName', user.first_name);
            var firstName = localStorage.getItem('firstName');
            console.log(firstName);
            localStorage.setItem('lastName', user.last_name);
            localStorage.setItem('username', username);
            window.location.href = '.\\tourly-master\\tourly-master\\index.html';
        } else {
            console.log('Incorrect password. Please try again.');
            errorDiv.innerText = "Username/Password is Wrong";
        }
    } catch (error) {
        console.error('There was a problem with fetching user credentials:', error);
        errorDiv.innerText = "There was a problem with the login. Please try again later.";
    }
}
