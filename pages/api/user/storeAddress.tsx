import connection from '../../../config/db';
const crypto = require('crypto');
import { RowDataPacket } from 'mysql2'; 

export default function addressHandler(req: any, res: any) {
  console.log('req', req)
  const { streetNumber, streetName, city, state, ZIP, email } = req.body;

  // Check if all required fields are provided
  if (!streetNumber || !streetName || !city || !state || !ZIP || !email) {
    res.status(400).json({ error: 'Please provide all required fields' });
    return;
  }

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      res.status(500).json({ error: 'Error connecting to MySQL' });
    } else {
      // First, check if the user with the given email exists in the database
      connection.query('SELECT id FROM users WHERE email = ?', [email], (error, results) => {
        if (error) {
          console.error('Error querying user:', error);
          res.status(500).json({ error: 'Error querying user' });
        } else {
          const userData: RowDataPacket[] = results as RowDataPacket[];
          if (userData.length === 0) {
            // If the user does not exist, you may choose to handle it as per your use case.
            // For example, you can return an error response or insert the user into the database.
            res.status(404).json({ error: 'User not found' });
          } else {
            const userId = userData[0].id;
            // Now that you have the userId, you can update the address information for that user
            const updateQuery = `
              UPDATE users
              SET streetNumber = ?, streetName = ?, city = ?, state = ?, ZIP = ?
              WHERE id = ?
            `;
            connection.query(updateQuery, [streetNumber, streetName, city, state, ZIP, userId], (error, updateResults) => {
              if (error) {
                console.error('Error updating address:', error);
                res.status(500).json({ error: 'Error updating address' });
              } else {
                res.status(200).json({ message: 'Address updated successfully' });
              }
            });
          }
        }
      });
    }
  });
}
