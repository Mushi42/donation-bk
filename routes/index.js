const express = require('express');

const userRoutes = require('./users.routes');
const categoryRoutes = require('./category.routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/category', categoryRoutes);

module.exports = router;