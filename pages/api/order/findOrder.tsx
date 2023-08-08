import connection from '../../../config/db';

export default function placeOrderHandler(req: any, res: any) {
    const customer_id  = req.query.customer_id;

    // Check if customer_id is provided
    if (!customer_id) {
        res.status(400).json({ error: 'Please provide customer_id' });
        return;
    }

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            res.status(500).json({ error: 'Error connecting to MySQL' });
        } else {
            const selectOrdersQuery = `
                SELECT order_id, total, products
                FROM orders
                WHERE customer_id = ?
            `;

            connection.query(selectOrdersQuery, [customer_id], (error, results) => {
                if (error) {
                    console.error('Error querying orders:', error);
                    res.status(500).json({ error: 'Error querying orders' });
                } else {
                    res.status(200).json(results);
                }
            });
        }
    });
}
