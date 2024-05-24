const express = require('express');
const router = express.Router();
const Order = require("../models/Orders");  // Ensure this path is correct

router.post('/myorderData', async (req, res) => {
    try {
        
        const myData = await Order.findOne({ email: req.body.email });
        if (!myData) {
            return res.status(404).json({ error: 'No order data found for this email' });
        }
        res.json({ orderData: myData });
    } catch (error) {
        console.error("Server Error:", error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Order = require("../models/Orders")         // Adjust the path as necessary

// router.post('/myorderData', async (req, res) => {
//     try {
//         const myData = await Order.findOne({ email: req.body.email });
//         if (!myData) {
//             return res.status(404).json({ error: 'No order data found for this email' });
//         }
//         res.json({ orderData: myData });
//     } catch (error) {
//         console.error("Server Error:", error.message);
//         res.status(500).send("Server Error");
//     }
// });

// module.exports = router;




// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Order'); // Adjust the path as necessary

// router.post('/myorderData', async (req, res) => {
//     try {
//         let myData = await Order.findOne({ email: req.body.email });
//         res.json({ orderData: myData });
//     } catch (error) {
//         console.error("Server Error:", error.message);
//         res.status(500).send("Server Error");
//     }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const Order=require("../models/Orders")

// router.post('/myorderData', async (req, res) => {
//     const email = req.body.email;
//     try {
//         const order = await Order.findOne({ email: email });
//         if (order) {
//             res.json(order);
//         } else {
//             res.json([]);
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Server Error");
//     }
// });
// module.exports=router;














