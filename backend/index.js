const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Decimal128 } = require('mongodb');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());
mongoose
  .connect('mongodb+srv://taproject:taproject%40123@bawansaimbi.2cd5ryk.mongodb.net/taproject')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const placeSchema = new mongoose.Schema({
  name: String,
  cost: Decimal128,
});
const credentialschema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  dob: Date,
  phone: Number,
  username: String,
  password: String
});
const bookingSchema = new mongoose.Schema({
  username: String,
  days: Number,
  people: Number,
  amount: Decimal128,
});

const Booking = mongoose.model('Booking', bookingSchema);
const Credential = mongoose.model('Credential', credentialschema);
const Place = mongoose.model('Place', placeSchema);

app.get('/places', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    console.error('Error fetching places:', err);
    res.status(500).send('Server Error');
  }
});

app.get('/credentials', async (req, res) => {
  try {
    const credentials = await Credential.find();
    res.json(credentials);
  } catch (err) {
    console.error('Error fetching credentials:', err);
    res.status(500).send('Server Error');
  }
});

app.post('/credentials', async (req, res) => {
  try {
    // Check if the username already exists
    const existingUser = await Credential.findOne({ username: req.body.username });
    if (existingUser) {
      // If the user already exists, return an error response
      return res.status(400).send('Username already exists');
    }

    // If the user does not exist, proceed with registration
    const newuser = new Credential({
      first_name: req.body.first,
      last_name: req.body.last,
      dob: req.body.dob,
      phone: req.body.phone,
      username: req.body.username,
      password: req.body.password
    });

    const savedUser = await newuser.save();
    console.log('Registered successfully:', savedUser);
    res.status(201).send('Registered successfully');
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).send('Server Error');
  }
});

app.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).send('Server Error');
  }
});

app.post('/bookings', async (req, res) => {
  try {
    const newBooking = new Booking({
      username: req.body.username,
      days: req.body.days,
      people: req.body.people,
      amount: req.body.amount
    });

    const savedBooking = await newBooking.save();
    console.log('Booking saved successfully:', savedBooking);
    res.status(201).send('Booking saved successfully');
  } catch (err) {
    console.error('Error saving booking:', err);
    res.status(500).send('Server Error');
  }
});




app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
