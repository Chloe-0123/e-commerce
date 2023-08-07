import connection from '../../../config/db';

export default function deleteUser(req: any, res: any) {

    const userEmail = req.query.email;
    console.log('delete account user email', userEmail)


    try {
        connection.connect((err) => {
            if (err) {
              console.error('Error connecting to MySQL:', err);
              res.status(500).json({ error: 'Error connecting to MySQL' });
            } 

            else {
                connection.query(`DELETE FROM users WHERE email = "${userEmail}"`, (error, results) => {
                    if (error) {
                        console.error('Error fetching users:', error);
                        res.status(500).json({ error: 'Error fetching users' });
                      } else {
                        console.log('deleted user', results) 
                        res.status(200).json(results)
                      }
                })
            }

        })
        
    } catch (error) {
        
    }

}

