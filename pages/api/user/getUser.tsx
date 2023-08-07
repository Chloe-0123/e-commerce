import connection from '../../../config/db';

// register & get user
export default function handler(req: any, res: any) {
  const userEmail = req.query.email;
  console.log('userEmail!!:', userEmail);

  try {
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        res.status(500).json({ error: 'Error connecting to MySQL' });
      } 
      
      
      else {
        connection.query(`SELECT * FROM users WHERE email = "${userEmail}"`, (error, results) => {
          if (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Error fetching users' });
          } 
          
          else {
            if (results.length === 0) {
              // No user found, insert a new user into the database
              connection.query(
                `INSERT INTO user (email) VALUES ("${userEmail}")`,
                (insertError, insertResults) => {
                  if (insertError) {
                    console.error('Error inserting new user:', insertError);
                    res.status(500).json({ error: 'Error inserting new user' });
                  } 
                  
                  else {
                    console.log('New user inserted:', insertResults);
                    // Now you can fetch the user again to get the inserted data
                    connection.query(
                      `SELECT * FROM users WHERE email = "${userEmail}"`,
                      (fetchError, fetchResults) => {
                        if (fetchError) {
                          console.error('Error fetching new user:', fetchError);
                          res.status(500).json({ error: 'Error fetching new user' });
                        } 
                        
                        else {
                          console.log('Fetched new user:', fetchResults);
                          res.status(200).json(fetchResults);
                        }
                      }
                    );
                  }
                }
              );
            } else {
              console.log('Fetched users:', results);
              res.status(200).json(results);
            }
          }
        });
      }
    });
  } catch (error) {
    console.error('Unhandled error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
