// pages/api/product/getOneProduct.js

import connection from '../../../config/db';

// API endpoint to fetch a single product by id
export default function getOneProduct(req:any, res:any) {
    console.log('YES')
  const { id } = req.query;
  console.log(id)


  try {
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        res.status(500).json({ error: 'Error connecting to MySQL' });
      } else {
        connection.query(`SELECT * FROM products where product_id = ?`, [id], (error, results) => {
          if (error) {
            console.error('Error fetching the product:', error);
            res.status(500).json({ error: 'Error fetching the product' });
          } else {
            console.log('RESULTS:', results);
            res.status(200).json(results);
          }
        });
      }
    });
  } catch (error) {
    console.error('Unhandled error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
