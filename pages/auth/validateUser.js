import { compare } from 'bcrypt';  // For password comparison
import connection from '../../../config/db';

export async function validateUser(email, password) {
  try {
    const [rows] = await connection.execute('SELECT * FROM user WHERE email = ?', [email]);
    const user = rows[0];

    if (user) {
      // If user exists, compare the provided password with the hashed password from the database
      const passwordMatch = await compare(password, user.password);

      if (passwordMatch) {
        // If the password matches, return an object with user data
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          // Add any additional user data as needed
        };
      }
    }

    // If the credentials are invalid or the user doesn't exist, return null or false
    return null;
  } catch (error) {
    console.error('Error validating user:', error);
    throw error;
  }
}
