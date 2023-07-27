import connection from '../../../config/db';


//fetch product data
export default function getProducts(req:any, res:any) {

    const { id } = req.query;
    console.log('Incoming id:', id);


    try {
        connection.connect((err) => {
            if (err) {
              console.error('Error connecting to MySQL:', err);
              res.status(500).json({ error: 'Error connecting to MySQL' });
            } else {
                connection.query(`SELECT * FROM products where id = ?`, [id], (error, results) => {
                    if (error) {
                        console.error('Error fetching the product:', error);
                        res.status(500).json({ error: 'Error fetching the product' });
                      } 

                    else {
                        res.status(200).json(results);
                    }
                })
            }
        })
    } catch (error) {
        console.error('Unhandled error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}