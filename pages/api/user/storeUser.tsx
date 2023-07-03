import connection from '../../../config/db';
const crypto = require('crypto');

export default function SingUpHandler(req:any, res:any) {
  const { firstName, lastName, email, password } = req.body;

  // Check if all required fields are provided
  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({ error: 'Please provide all required fields' });
    return;
  }

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      res.status(500).json({ error: 'Error connecting to MySQL' });
    } else {
    
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    };


    connection.query('INSERT INTO user SET ?', newUser, (error, results) => {
      if (error) {
        console.error('Error inserting new user:', error);
        res.status(500).json({ error: 'Error inserting new user' });
      } else {
        res.status(200).json({ message: 'User registered successfully' });
      }
    });
    }
  });
}
