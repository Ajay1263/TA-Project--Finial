document.addEventListener("DOMContentLoaded", async function() {
  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // Extract individual parameters
  const destination = urlParams.get('destination');
  const people = urlParams.get('people');
  const checkin = new Date(urlParams.get('checkin'));
  const checkout = new Date(urlParams.get('checkout'));
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const username = localStorage.getItem('username');

  // Calculate the number of days between check-in and check-out dates
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const numberOfDays = Math.round(Math.abs((checkout - checkin) / oneDay));

  // Now you can use these parameters as needed
  console.log('Destination:', destination);
  console.log('Number of People:', people);
  console.log('Check-in Date:', checkin);
  console.log('Check-out Date:', checkout);
  console.log('Number of Days:', numberOfDays);

  // Example: Display the extracted parameters in the HTML
  document.getElementById('book-place').innerText = destination;
  document.getElementById('num-guests').innerText = people;
  document.getElementById('checkin-date').innerText = checkin.toLocaleDateString();
  document.getElementById('checkoutdate').innerText = checkout.toLocaleDateString();
  document.getElementById('name').innerText = firstName + ' ' + lastName;

  try {
    // Fetch data from /places endpoint
    const response = await fetch('http://localhost:3000/places');
    const data = await response.json();

    // Find the destination in the response
    const place = data.find(place => place.name === destination);

    // Display the cost if the destination is found
    if (place) {
      // Extract the cost value from the nested object
      const costPerDay = parseFloat(place.cost["$numberDecimal"]);
      const totalAmount = costPerDay * numberOfDays;
      document.getElementById('cost').innerText = costPerDay;
      document.getElementById('totalAmount').innerText = totalAmount;
    } else {
      console.log(`Cost for ${destination} not found.`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
