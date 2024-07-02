const express = require('express');
const router = express.Router();
router.post('/createuser', (req, res) => {
    const user = req.body;
    res.send(`User ${user.name} created!`);
});
module.exports = router;
