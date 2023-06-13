import connection from '../../../config/db';



export default function handler(req:any, res:any) {
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      res.status(500).json({ error: 'Error connecting to MySQL' });
    } else {
      connection.query('SELECT * FROM user', (error, results) => {
        if (error) {
          console.error('Error fetching users:', error);
          res.status(500).json({ error: 'Error fetching users' });
        } else {
          res.status(200).json(results);
        }
        
      });
    }
  });
}
