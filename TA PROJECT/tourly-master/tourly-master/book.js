document.addEventListener("DOMContentLoaded", function() {
  
// Add a submit event listener to the form
document.getElementById("bookNow").addEventListener("click", function(event) {
  // Prevent the form from submitting (for demonstration)
  // event.preventDefault();

  // Check if all mandatory fields are filled
  var destination = document.getElementById("destination").value;
  var people = document.getElementById("people").value;
  var checkin = document.getElementById("checkin").value;
  var checkout = document.getElementById("checkout").value;

  if (destination !== "" && people !== "" && checkin !== "" && checkout !== "") {
    // If all fields are filled, display the "Book Now" popup
    displayBookNowPopup();
  } else {
    // If any field is empty, alert the user
    alert("Please fill in all mandatory fields.");
  }
});
var firstName = localStorage.getItem('firstName');
console.log(firstName)
  const list = document.getElementById('destination-list');
  
  fetch('http://localhost:3000/places')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Log the data received from the server
      data.forEach(place => {
        const optionElement = document.createElement('option');
        optionElement.value = place.name;
        optionElement.innerText = place.name;
        list.appendChild(optionElement);
        console.log(place);
      });
    })
    .catch(error => console.error("Error fetching places:", error));
});

// document.getElementById("logout").addEventListener("click", function(event) {
//   event.preventDefault();
//   // Remove saved data from local storage
//   localStorage.removeItem('firstName');
//   localStorage.removeItem('lastName');
//   localStorage.removeItem('username');
//   // Redirect to the login page
//   window.location.href = '../../login_index.html';
// });

// Function to construct the URL with parameters and navigate to it
function displayBookNowPopup() {
  var destination = document.getElementById("destination-list").value;
  var people = document.getElementById("people").value;
  var checkin = document.getElementById("checkin").value;
  var checkout = document.getElementById("checkout").value;

  // Encode the parameters to ensure proper URL formatting
  destination = encodeURIComponent(destination);
  people = encodeURIComponent(people);
  checkin = encodeURIComponent(checkin);
  checkout = encodeURIComponent(checkout);

  // Construct the URL with parameters
  var url = `./confirm.html?destination=${destination}&people=${people}&checkin=${checkin}&checkout=${checkout}`;

  // Navigate to the confirm.html page with parameters
  window.location.href = url;
}


// Find the form by its ID
