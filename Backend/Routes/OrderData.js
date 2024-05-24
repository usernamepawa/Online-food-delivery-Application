const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post('/orderData', async (req, res) => {
    try {
        let data = req.body.order_data;

        // Add the order date at the beginning of the data array
        data.splice(0, 0, { Order_date: req.body.order_date });

        // Find if there is an existing order for the email
        let eId = await Order.findOne({ email: req.body.email });
        console.log(eId);

        if (eId == null) {
            try {
                await Order.create({
                    email: req.body.email,
                    order_data: [data]
                });
                res.status(201).json({ success: true });
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: 'Server Error', error: error.message });
            }
        } else {
            try {
                await Order.findOneAndUpdate(
                    { email: req.body.email },
                    { $push: { order_data: data } }
                );
                res.status(200).json({ success: true });
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ message: 'Server Error', error: error.message });
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

module.exports = router;
