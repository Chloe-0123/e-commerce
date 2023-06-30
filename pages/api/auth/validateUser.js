import { compare } from 'bcrypt';
import connection from '../../../config/db';
import bcrypt from "bcrypt";


export async function validateUser(email, password) {
  try {
    console.log('hard');
    const rows = await connection.execute('SELECT * FROM user = ?', [ email ]);
    console.log('rows', rows)
    const user = rows && rows.length > 0 ? rows[0] : null;
    console.log('user', user)


    if (user) {
      const passwordMatch = await compare(password, user.password);

      if (passwordMatch) {
        return {
          id: user.id,
          name: user.firstName,
          email: user.email,
          // Add any additional user data as needed
        };
      }
    }

    return null;
  } catch (error) {
    console.error('Error validating user:', error);
    throw error;
  }
}