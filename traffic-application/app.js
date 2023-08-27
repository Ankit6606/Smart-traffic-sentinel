const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require('./config/database');
const Vehicle = require('./models/vehicle');
const faker = require('faker');

app.use(bodyParser.json());

// ... your other routes and middleware ...

// Route to populate the database with random data
app.get('/populate', async (req, res) => {
  try {
    // Create a batch of fake vehicles using faker
    const batch = Array.from({ length: 10 }, () => ({
      number_plate: faker.random.alphaNumeric(10),
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      pollution_status: faker.random.arrayElement(['clean', 'dirty']),
      insurance_status: faker.random.arrayElement(['valid', 'expired']),
      tax_status: faker.random.arrayElement(['paid', 'pending']),
      owner_email: faker.internet.email(),
    }));

    // Insert the batch into the database
    await Vehicle.bulkCreate(batch);

    res.send('Data populated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error populating data');
  }
});

// ... other routes ...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
