const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Läs in användardatabasen från users.json-filen
const usersFilePath = path.join(__dirname, 'users.json');
let users = [];
try {
  const usersData = fs.readFileSync(usersFilePath, 'utf8');
  users = JSON.parse(usersData);
} catch (error) {
  console.error('An error occurred while reading users data:', error);
}

// Signup (Registrering)
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Kontrollera om användaren redan finns
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Kryptera lösenordet innan lagring
    const hashedPassword = await bcrypt.hash(password, 10);

    // Lägg till användaren i databasen
    users.push({ name, email, password: hashedPassword });
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

    res.status(200).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ message: 'An error occurred while registering the user.' });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hitta användaren i databasen baserat på e-postadress
    const user = users.find(user => user.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Jämför lösenordet med det hashade lösenordet i databasen
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Skapa en JWT-token för autentisering
    const token = jwt.sign({ email: user.email }, 'secret_key');
    res.status(200).json({ token });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ message: 'An error occurred while logging in.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

