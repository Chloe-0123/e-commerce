import connection from '../../../config/db';

export default function placeOrderHandler(req: any, res: any) {
    const { customer_id, total, products } = req.body;

    // Check if all required fields are provided
    if (!customer_id || !total || !products) {
        res.status(400).json({ error: 'Please provide all required fields' });
        return;
    }

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            res.status(500).json({ error: 'Error connecting to MySQL' });
        } else {
            const insertOrderQuery = `
                INSERT INTO orders (customer_id, total, products)
                VALUES (?, ?, ?)
            `;

            const productsJson = JSON.stringify(products); // Convert products array to JSON string

            connection.query(insertOrderQuery, [customer_id, total, productsJson], (error, results) => {
                if (error) {
                    console.error('Error inserting order:', error);
                    res.status(500).json({ error: 'Error inserting order' });
                } else {
                    res.status(200).json({ message: 'Order placed successfully' });
                }
            });
        }
    });
}
